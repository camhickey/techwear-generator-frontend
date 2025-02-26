import { CustomModal } from '@components/CustomModal';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
  const faqs = [
    {
      question: 'How do I use this site?',
      answer:
        'On your screen is the outline of a techwear outfit. Click on the colors to choose a color for each part of the outfit. Then click "create" to build your outfit.',
    },
    {
      question: 'What is the style?',
      answer:
        'The style is determined by your choices of headwear, top, pants, and footwear.',
    },
    {
      question: 'What is the color?',
      answer:
        'The color is determined by your choices of headwear, top, pants, and footwear.',
    },
  ];
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="FAQs">
      <div className="flex flex-col gap-4">
        {faqs.map((faq) => (
          <div>
            <p className="font-medium text-white text-left">{faq.question}</p>
            <p className="text-sm text-neutral-400 text-left">{faq.answer}</p>
          </div>
        ))}
      </div>
    </CustomModal>
  );
}
