/* Video background. Shared scope; build with node scripts/build.cjs. */

var BackgroundVideo = memo(({ brightness: e = 100 }) => {
  let t = useRef(null);
  let [n, r] = useState(null);
  let [i, a] = useState(true);
  let [o, s] = useState(false);
  let c = useRef(false);
  let l = useRef(false);
  let u = useRef(null);
  return (
    useEffect(() => {
      let e = null;
      let t = true;
      let n = false;
      return (
        (async () => {
          try {
            a(true);
            let i = await loadBackgroundMedia();
            if (!t) return;
            if (i) {
              if (!i.type) {
                console.error(`Blob is missing MIME type`);
                a(false);
                return;
              }
              e = URL.createObjectURL(i);
              n = true;
              r(e);
              u.current = setTimeout(() => {
                t && (console.error(`Video load timeout`), a(false));
              }, 15e3);
            } else (console.error(`No blob found in storage`), a(false));
          } catch (e) {
            console.error(`Error loading video from storage:`, e);
            a(false);
          }
        })(),
        () => {
          t = false;
          u.current &&= (clearTimeout(u.current), null);
          e &&
            n &&
            setTimeout(() => {
              URL.revokeObjectURL(e);
            }, 500);
        }
      );
    }, []),
    useEffect(() => {
      let e = t.current;
      if (!e || !n) return;
      l.current = false;
      let r = () => {
        l.current ||
          ((l.current = true),
          (u.current &&= (clearTimeout(u.current), null)),
          a(false),
          e.play().catch((e) => {
            console.error(`Video play failed:`, e);
            l.current = false;
          }));
      };
      let i = () => {
        c.current ||= true;
      };
      let o = (e) => {
        let t = e.target.error;
        console.error(`Video error event:`, t);
        u.current &&= (clearTimeout(u.current), null);
        a(false);
      };
      return (
        e.addEventListener(`canplay`, r),
        e.addEventListener(`playing`, i),
        e.addEventListener(`error`, o),
        () => {
          e.removeEventListener(`canplay`, r);
          e.removeEventListener(`playing`, i);
          e.removeEventListener(`error`, o);
        }
      );
    }, [n]),
    useEffect(
      () => () => {
        s(true);
      },
      [],
    ),
    n
      ? jsxs(jsxRuntime.Fragment, {
          children: [
            jsx(`video`, {
              ref: t,
              src: n,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              preload: `auto`,
              className: `fixed top-0 left-0 w-full h-full object-cover`,
              style: {
                opacity: i || o ? 0 : 1,
                transition: `opacity 0.5s ease-in-out`,
                filter: `brightness(${e / 100})`,
                zIndex: -2,
              },
            }),
            jsx(`div`, {
              className: `fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/60`,
              style: {
                pointerEvents: `none`,
                zIndex: -1,
              },
            }),
          ],
        })
      : null
  );
});
BackgroundVideo.displayName = `BackgroundVideo`;
