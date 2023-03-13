import {MatcherFunction} from '@testing-library/react';

type Query = (f: MatcherFunction) => HTMLElement;

const withMarkup =
  (query: Query) =>
  (text: string): HTMLElement =>
    query((content: string, node: Element | null) => {
      if (!node) return false;
      const hasText = (innerNode: HTMLElement) => innerNode.textContent === text;
      const childrenDontHaveText = node && Array.from(node.children).every(child => !hasText(child as HTMLElement));
      return hasText(node as HTMLElement) && childrenDontHaveText;
    });

export default withMarkup;
