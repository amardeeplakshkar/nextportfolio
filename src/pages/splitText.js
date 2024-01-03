import React, { useEffect, useRef } from 'react';

export class SplitText {
  #options = {
    charClass: "aki__char",
    wordClass: "aki__word",
    lineClass: "aki__line",
    globalClass: "aki_wrapper",
    emptySpaceName: "__AKI__EMPTY__SPACE__",
  };

  #rawChars = [];
  chars = [];
  #rawWords = [];
  words = [];
  lines = [];

  constructor(elementOrSelector) {
    this.init(elementOrSelector);
  }

  #isElement(obj) {
    try {
      return obj instanceof HTMLElement;
    } catch (e) {
      return (
        typeof obj === "object" &&
        obj.nodeType === 1 &&
        typeof obj.style === "object" &&
        typeof obj.ownerDocument === "object"
      );
    }
  }

  #createElement(tagname, content = "", htmlAttributes = {}, ...cssClass) {
    const element = document.createElement(tagname);
    element.classList.add(...cssClass);
    element.innerHTML = content;

    for (const [key, value] of Object.entries(htmlAttributes)) {
      element.setAttribute(key, value);
    }

    return element;
  }

  #splitChars() {
    const textChars = `${this.textContent}`.split("");

    textChars.forEach((char) => {
      const charElement = this.#createElement(
        "div",
        `${char}`,
        {
          style: "position:relative; display:inline-block;",
        },
        `${this.#options.globalClass}`,
        `${this.#options.charClass}`
      );

      this.#rawChars.push(char === " " ? " " : charElement);
      this.chars.push(charElement);
    });
    this.#rawChars.push(" ");
  }

  #splitWords() {
    let startIndex = 0;
    this.#rawChars.forEach((rawChar, index) => {
      if (rawChar === " ") {
        const wordArray = this.#rawChars
          .slice(startIndex, index)
          .filter((word) => word !== " ");

        const wordDiv = this.#createElement(
          "div",
          "",
          {
            style: "position:relative; display:inline-block;",
          },
          `${this.#options.globalClass}`,
          `${this.#options.wordClass}`
        );

        wordArray.forEach((word) => {
          wordDiv.append(word);
        });

        this.words.push(wordDiv);
        this.#rawWords.push(wordDiv, " ");
        startIndex = index;
      }
    });
  }

  #splitLines() {
    let startIndex = 0;
    let lineArrays = [];

    const appendToLineArray = () => {
      lineArrays.forEach((lineArray) => {
        const lineDiv = this.#createElement(
          "div",
          "",
          {
            style: "position:relative; display:inline-block",
          },
          `${this.#options.globalClass}`,
          `${this.#options.lineClass}`
        );

        lineArray.forEach((lineWord) => {
          lineDiv.append(lineWord);
          lineDiv.append(" ");
        });
        this.lines.push(lineDiv);
        this.target.append(lineDiv);
      });
    };

    this.words.reduce((oldOffsetTop, word, index) => {
      const currentOffsetTop = word.offsetTop;

      if (
        (oldOffsetTop !== currentOffsetTop && oldOffsetTop !== null) ||
        index === this.words.length - 1
      ) {
        const computedIndex =
          index === this.words.length - 1 ? index + 1 : index;
        const lineArray = this.words.slice(startIndex, computedIndex);
        lineArrays.push(lineArray);
        startIndex = index;
      }

      return currentOffsetTop;
    }, null);

    appendToLineArray();
  }

  #combineAll() {
    this.words.forEach((word) => {
      this.target.append(word);
      this.target.append(" ");
    });
    this.#splitLines();
  }

  #splitStart() {
    this.#splitChars();
    this.#splitWords();
    this.#combineAll();
  }

  #getTextContent() {
    this.textContent = this.target.textContent;
  }

  #clearContent(element) {
    element.innerHTML = "";
  }

  #logError(message) {
    console.error(`${message}`, "color:red", "color:inherit");
  }

  #logAndThrowError(message) {
    if (message.includes("%c")) {
      console.error(`${message}`, "color:red", "color:inherit");
    } else {
      console.error(`${message}`);
    }
    throw new Error("SplitTextException! ⬆️");
  }

  init(elementOrSelector) {
    if (this.#isElement(elementOrSelector)) {
      this.target = elementOrSelector;
      this.#getTextContent();
    } else {
      if (elementOrSelector !== "") {
        const element = document.querySelector(`${elementOrSelector}`);
        if (element) {
          this.target = element;
          this.#getTextContent();
        } else {
          this.#logAndThrowError(
            `can't found %c${elementOrSelector}%c in DOM tree!`
          );
        }
      } else {
        this.#logAndThrowError(
          `selector is empty! %cplease give a valid%c selector!`
        );
      }
    }

    this.#clearContent(this.target);
    this.#splitStart();
  }
}

const SplitTextComponent = ({ elementOrSelector }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const splitTextInstance = new SplitText(elementOrSelector);
    splitTextInstance.init(targetRef.current);

    return () => {
      // Optional: Perform cleanup if needed
    };
  }, [elementOrSelector]);

  return <div ref={targetRef} />;
};

export default SplitTextComponent;
