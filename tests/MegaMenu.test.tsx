import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import MegaMenu from '../components/MegaMenu';
import { NewNavLinkMegaMenuContent } from '../types';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

const mockContent: NewNavLinkMegaMenuContent = {
  items: [
    {
      id: 'test-item-1',
      title: 'Test Item 1',
      featured: {
        title: 'Featured Test',
        description: 'This is a test featured item',
        imageUrl: 'https://example.com/featured.jpg',
        linkUrl: '/test-featured',
        linkText: 'Learn More',
      },
      subLinks: [
        {
          title: 'Sub Link 1',
          imageUrl: 'https://example.com/sub1.jpg',
          href: '/sub1',
          description: 'Sub link description',
        },
        {
          title: 'Sub Link 2',
          imageUrl: 'https://example.com/sub2.jpg',
          href: '/sub2',
          description: 'Another sub link',
        },
      ],
    },
    {
      id: 'test-item-2',
      title: 'Test Item 2',
      featured: {
        title: 'Another Featured Test',
        description: 'Another test featured item',
        imageUrl: 'https://example.com/featured2.jpg',
      },
      subLinks: [
        {
          title: 'Sub Link 3',
          imageUrl: 'https://example.com/sub3.jpg',
          href: '/sub3',
        },
      ],
    },
  ],
};

const mockParentRef = {
  current: {
    getBoundingClientRect: () => ({
      bottom: 100,
      top: 50,
      left: 0,
      right: 200,
      width: 200,
      height: 50,
    }),
  } as HTMLDivElement,
};

const renderMegaMenu = (props = {}) => {
  const defaultProps = {
    isOpen: true,
    content: mockContent,
    onClose: jest.fn(),
    parentRef: mockParentRef,
    ...props,
  };

  return render(
    <BrowserRouter>
      <MegaMenu {...defaultProps} />
    </BrowserRouter>
  );
};

describe('MegaMenu Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('renders when open with content', () => {
      renderMegaMenu();
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Test Item 1')).toBeInTheDocument();
      expect(screen.getByText('Featured Test')).toBeInTheDocument();
    });

    test('does not render when closed', () => {
      renderMegaMenu({ isOpen: false });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    test('does not render without content', () => {
      renderMegaMenu({ content: undefined });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    test('renders navigation items correctly', () => {
      renderMegaMenu();
      expect(screen.getByText('Test Item 1 »')).toBeInTheDocument();
      expect(screen.getByText('Test Item 2 »')).toBeInTheDocument();
    });

    test('renders featured content for active item', () => {
      renderMegaMenu();
      expect(screen.getByText('Featured Test')).toBeInTheDocument();
      expect(screen.getByText('This is a test featured item')).toBeInTheDocument();
      expect(screen.getByText('Learn More →')).toBeInTheDocument();
    });

    test('renders sub-links for active item', () => {
      renderMegaMenu();
      expect(screen.getByText('Sub Link 1')).toBeInTheDocument();
      expect(screen.getByText('Sub Link 2')).toBeInTheDocument();
      expect(screen.getByText('Sub link description')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('has proper ARIA attributes', () => {
      renderMegaMenu();
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(dialog).toHaveAttribute('aria-label', 'Navigation menu');
    });

    test('navigation items have proper ARIA attributes', () => {
      renderMegaMenu();
      const navItems = screen.getAllByRole('button');
      const firstNavItem = navItems[0];
      expect(firstNavItem).toHaveAttribute('aria-current', 'true');
      expect(firstNavItem).toHaveAttribute('aria-expanded', 'true');
    });

    test('navigation has proper role', () => {
      renderMegaMenu();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe('Keyboard Navigation', () => {
    test('closes on Escape key', async () => {
      const onClose = jest.fn();
      renderMegaMenu({ onClose });
      
      fireEvent.keyDown(document, { key: 'Escape' });
      await waitFor(() => {
        expect(onClose).toHaveBeenCalled();
      });
    });

    test('navigates with arrow keys', async () => {
      renderMegaMenu();
      
      // Initially, first item should be active
      expect(screen.getByText('Featured Test')).toBeInTheDocument();
      
      // Press arrow down to go to next item
      fireEvent.keyDown(document, { key: 'ArrowDown' });
      
      await waitFor(() => {
        expect(screen.getByText('Another Featured Test')).toBeInTheDocument();
      });
    });

    test('wraps around when using arrow keys', async () => {
      renderMegaMenu();
      
      // Go to last item first
      fireEvent.keyDown(document, { key: 'ArrowDown' });
      await waitFor(() => {
        expect(screen.getByText('Another Featured Test')).toBeInTheDocument();
      });
      
      // Press arrow down again should wrap to first item
      fireEvent.keyDown(document, { key: 'ArrowDown' });
      await waitFor(() => {
        expect(screen.getByText('Featured Test')).toBeInTheDocument();
      });
    });
  });

  describe('Mouse Interactions', () => {
    test('changes active item on hover', async () => {
      renderMegaMenu();
      
      // Initially shows first item
      expect(screen.getByText('Featured Test')).toBeInTheDocument();
      
      // Hover over second item
      const secondNavItem = screen.getByText('Test Item 2 »');
      fireEvent.mouseEnter(secondNavItem);
      
      await waitFor(() => {
        expect(screen.getByText('Another Featured Test')).toBeInTheDocument();
      });
    });

    test('calls onClose when link is clicked', () => {
      const onClose = jest.fn();
      renderMegaMenu({ onClose });
      
      const link = screen.getByText('Learn More →');
      fireEvent.click(link);
      
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('Performance', () => {
    test('renders without performance issues', () => {
      const start = performance.now();
      renderMegaMenu();
      const end = performance.now();
      
      // Should render in under 50ms
      expect(end - start).toBeLessThan(50);
    });

    test('handles large content efficiently', () => {
      const largeContent = {
        items: Array.from({ length: 10 }, (_, i) => ({
          id: `item-${i}`,
          title: `Item ${i}`,
          featured: {
            title: `Featured ${i}`,
            description: `Description ${i}`,
            imageUrl: `https://example.com/featured${i}.jpg`,
          },
          subLinks: Array.from({ length: 8 }, (_, j) => ({
            title: `Sub ${i}-${j}`,
            imageUrl: `https://example.com/sub${i}-${j}.jpg`,
            href: `/sub${i}-${j}`,
          })),
        })),
      };

      const start = performance.now();
      renderMegaMenu({ content: largeContent });
      const end = performance.now();
      
      // Should still render efficiently even with large content
      expect(end - start).toBeLessThan(100);
    });
  });

  describe('Error Handling', () => {
    test('handles missing featured content gracefully', () => {
      const contentWithoutFeatured = {
        items: [
          {
            id: 'test-item',
            title: 'Test Item',
            featured: {
              title: '',
              description: '',
              imageUrl: '',
            },
            subLinks: [],
          },
        ],
      };

      expect(() => {
        renderMegaMenu({ content: contentWithoutFeatured });
      }).not.toThrow();
    });

    test('handles empty sub-links array', () => {
      const contentWithoutSubLinks = {
        items: [
          {
            id: 'test-item',
            title: 'Test Item',
            featured: {
              title: 'Featured Test',
              description: 'Description',
              imageUrl: 'https://example.com/featured.jpg',
            },
            subLinks: [],
          },
        ],
      };

      expect(() => {
        renderMegaMenu({ content: contentWithoutSubLinks });
      }).not.toThrow();
    });
  });

  describe('Responsive Design', () => {
    test('applies responsive classes correctly', () => {
      renderMegaMenu();
      const container = screen.getByRole('dialog');
      expect(container.querySelector('.flex')).toBeInTheDocument();
      expect(container.querySelector('.flex-col')).toBeInTheDocument();
    });
  });
});