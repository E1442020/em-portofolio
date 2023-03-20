import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Text, Transition, rem } from "@mantine/core";
import { AiOutlineArrowUp } from "react-icons/ai";
export function Affixx() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              color="dark"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <AiOutlineArrowUp />
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
