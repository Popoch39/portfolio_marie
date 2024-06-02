"use client";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { cn } from "@/utils/cn";
import { useCallback, useEffect, useState } from "react";

export const FlipWords = ({
    words,
    setIsLastWord,
    isLastWord,
    duration = 3000,
    className,
}: {
    words: string[];
    setIsLastWord: (isLastWord: boolean) => void;
    isLastWord: boolean;
    duration?: number;
    className?: string;
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    // thanks for the fix Julian - https://github.com/Julian-AT
    const startAnimation = () => {
        const arrayLength = words.length;
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
        if (arrayLength - 1 === words.indexOf(word)) {
            setIsLastWord(true);
        }
    }

    useEffect(() => {
        let timeOut: NodeJS.Timeout;

        if (!isAnimating && !isLastWord) {
            timeOut = setTimeout(() => {
                startAnimation();
            }, duration);
        }

        // Cleanup function to clear the timeout
        return () => {
            if (timeOut) {
                clearTimeout(timeOut);
            }
        };
    }, [isAnimating, duration, startAnimation, isLastWord]);

    useEffect(() => {
        if (isLastWord) {
            setIsAnimating(false);
        }
    }, [isLastWord]);


    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
                    className
                )}
                key={currentWord}
            >
                {currentWord.split("").map((letter, index) => (
                    <motion.span
                        key={currentWord + index}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            delay: index * 0.08,
                            duration: 0.4,
                        }}
                        className="inline-block"
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};