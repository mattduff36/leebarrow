'use client'

import Modal from './Modal'
import { motion } from 'framer-motion'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export default function AboutModal({ isOpen, onClose, title = "ABOUT" }: AboutModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="prose max-w-none text-center"
      >
        <p className="text-lg">
          Lee Barrowcliff will write something here about Lee Barrowcliff Photography and the pictures on this website. 
          There will be 2 or 3 sentences which will fill this space, and replace this text.
        </p>
      </motion.div>
    </Modal>
  )
} 