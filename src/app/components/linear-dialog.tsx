'use client';

import React, { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, MotionConfig, Transition, Variant } from 'framer-motion';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';

interface DialogContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueId: string;
  triggerRef: React.RefObject<HTMLDivElement>;
}

const DialogContext = React.createContext<DialogContextType | null>(null);

function useDialog() {
  const context = useContext(DialogContext);
  if (!context) throw new Error('useDialog must be used within a DialogProvider');
  return context;
}

// Default transition configuration
const defaultTransition: Transition = {
  type: 'spring',
  damping: 25,
  stiffness: 120
};

interface DialogProps {
  children: React.ReactNode;
  transition?: Transition;
  onOpenChange?: (open: boolean) => void;
}

function Dialog({ children, transition = defaultTransition, onOpenChange }: DialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);

  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen, uniqueId, triggerRef }),
    [isOpen, uniqueId]
  );

  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  return (
    <DialogContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>
        {children}
      </MotionConfig>
    </DialogContext.Provider>
  );
}

interface DialogTriggerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

function DialogTrigger({ children, className, style, disabled }: DialogTriggerProps) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useDialog();

  const handleClick = useCallback(() => {
    if (!disabled) setIsOpen(!isOpen);
  }, [isOpen, setIsOpen, disabled]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (disabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  }, [isOpen, setIsOpen, disabled]);

  return (
    <motion.div
      ref={triggerRef}
      layoutId={`dialog-${uniqueId}`}
      className={cn('relative cursor-pointer', disabled && 'cursor-not-allowed opacity-50', className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={style}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls={`dialog-content-${uniqueId}`}
    >
      {children}
    </motion.div>
  );
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function DialogContent({ children, className, style }: DialogContentProps) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useDialog();
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);

  // Focus trap implementation
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const elements = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.hasAttribute('disabled'));
    
    setFocusableElements(elements);
    if (elements.length > 0) elements[0].focus();
  }, [isOpen]);

  // Keyboard handling
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (event.key === 'Tab' && focusableElements.length > 0) {
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen, focusableElements]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <motion.div
      ref={containerRef}
      layoutId={`dialog-${uniqueId}`}
      className={cn('overflow-y-auto', className)}
      style={style}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`dialog-title-${uniqueId}`}
    >
      {children}
    </motion.div>
  );
}

interface DialogContainerProps {
  children: React.ReactNode;
  className?: string;
  disableBackdropClick?: boolean;
}

function DialogContainer({ children, className, disableBackdropClick }: DialogContainerProps) {
  const { isOpen, setIsOpen } = useDialog();

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (!disableBackdropClick) setIsOpen(false);
  }, [setIsOpen, disableBackdropClick]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          />
          <div className={cn('fixed inset-0 z-50 flex items-center justify-center p-4', className)}>
            {children}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

// DialogClose component definition
function DialogClose({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const { setIsOpen } = useDialog();

  const handleClick = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <button
      type="button"
      className={cn('absolute top-4 right-4', className)}
      style={style}
      onClick={handleClick}
      aria-label="Close dialog"
    >
      <XIcon className="md:w-6 md:h-6 w-4 h-4" />
    </button>
  );
}

// DialogTitle component definition
function DialogTitle({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { uniqueId } = useDialog();

  return (
    <h2
      id={`dialog-title-${uniqueId}`}
      className={cn('text-lg font-medium text-gray-900', className)}
      style={style}
    >
      {children}
    </h2>
  );
}

// DialogDescription component definition
function DialogDescription({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { uniqueId } = useDialog();

  return (
    <div
      id={`dialog-description-${uniqueId}`}
      className={cn('mt-2 text-sm text-gray-500', className)}
      style={style}
    >
      {children}
    </div>
  );
}

// DialogImage component definition
function DialogImage({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className='h-full'>
      <img
        src={src}
        alt={alt}
        className={cn('w-full h-full', className)}
        style={style}
      />
    </div>
  );
}

// Other components (DialogTitle, etc.) remain similar but with TypeScript types

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogContainer,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogImage
};