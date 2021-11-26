"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSticky = void 0;
const react_1 = require("react");
/**
 * Returns a ref, and a stateful value bound to the ref
 */
function useSticky() {
    const stickyRef = (0, react_1.useRef)(null);
    const [sticky, setSticky] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        // Observe when ref enters or leaves sticky state
        // rAF https://stackoverflow.com/questions/41740082/scroll-events-requestanimationframe-vs-requestidlecallback-vs-passive-event-lis
        function observe() {
            if (!stickyRef.current)
                return;
            const refPageOffset = stickyRef.current.getBoundingClientRect().top;
            const stickyOffset = parseInt(getComputedStyle(stickyRef.current).top);
            const stickyActive = refPageOffset <= stickyOffset;
            if (stickyActive && !sticky)
                setSticky(true);
            else if (!stickyActive && sticky)
                setSticky(false);
        }
        observe();
        // Bind events
        document.addEventListener('scroll', observe);
        window.addEventListener('resize', observe);
        window.addEventListener('orientationchange', observe);
        return () => {
            document.removeEventListener('scroll', observe);
            window.removeEventListener('resize', observe);
            window.removeEventListener('orientationchange', observe);
        };
    }, [sticky]);
    return [stickyRef, sticky];
}
exports.useSticky = useSticky;
//# sourceMappingURL=index.js.map