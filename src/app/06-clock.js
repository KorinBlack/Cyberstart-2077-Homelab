/* Clock and date component. Shared scope; build with node scripts/build.cjs. */

var /* Clock and date component. */
  Clock = ({ showTime = true, showDate = true, glitchingTime = false, glitchingDate = false }) => {
    let [timeText, setTimeText] = useState(formatCurrentTime());
    let [dateText, setDateText] = useState(formatCurrentDate());
    let [clockGlitching, setClockGlitching] = useState(false);
    let [use24HourTime, setUse24HourTime] = useState(getTimeFormat());
    let [formatGlitching, setFormatGlitching] = useState(false);
    return (
      useEffect(() => {
        let e = setInterval(() => {
          setTimeText(formatCurrentTime());
          setDateText(formatCurrentDate());
        }, 1e3);
        let t = setInterval(() => {
          Math.random() > 0.9 &&
            (setClockGlitching(true), setTimeout(() => setClockGlitching(false), 200));
        }, 5e3);
        return () => {
          clearInterval(e);
          clearInterval(t);
        };
      }, []),
      jsxs(`div`, {
        className: `clock-container flex flex-col items-center mb-6`,
        children: [
          showTime &&
            jsxs(`button`, {
              onClick: () => {
                setFormatGlitching(true);
                setTimeout(() => {
                  let e = !use24HourTime;
                  setUse24HourTime(e);
                  setTimeFormat(e);
                  setTimeText(formatCurrentTime());
                  setFormatGlitching(false);
                }, 100);
              },
              className: `text-6xl md:text-8xl font-mono font-bold text-cyan-400 
                     tracking-wide relative hover-glitch cursor-pointer transition-colors
                     hover:text-cyan-300 ${clockGlitching || formatGlitching || glitchingTime ? `glitch` : ``}`,
              "data-text": timeText,
              children: [
                timeText,
                (clockGlitching || formatGlitching || glitchingTime) &&
                  jsx(`span`, {
                    className: `absolute inset-0 text-pink-500 glitch-1`,
                    children: timeText,
                  }),
                (clockGlitching || formatGlitching || glitchingTime) &&
                  jsx(`span`, {
                    className: `absolute inset-0 text-yellow-300 glitch-2`,
                    children: timeText,
                  }),
              ],
            }),
          showDate &&
            jsx(`p`, {
              className: `text-lg md:text-xl text-yellow-300 font-mono mt-2 uppercase tracking-widest hover-glitch ${glitchingDate ? `glitch` : ``}`,
              "data-text": dateText,
              children: dateText,
            }),
        ],
      })
    );
  };
