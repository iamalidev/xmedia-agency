export const softEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: softEase },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, ease: softEase },
};

export const stagger = (delay = 0.1) => ({
  transition: { duration: 0.85, ease: softEase, delay },
});

export const inViewProps = {
  once: true,
  margin: "-80px" as const,
};
