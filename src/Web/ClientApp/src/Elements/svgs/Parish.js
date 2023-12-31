import * as React from "react";

function Parish(props) {
  return (
    <svg width="1em" height="1em" fill="none" {...props}>
      <path
        d="M11.429 8.014V6.593a1.429 1.429 0 00-.793-1.279L7.857 3.93V2.857h.714a.716.716 0 00.715-.714.716.716 0 00-.715-.714h-.714V.714A.716.716 0 007.143 0a.716.716 0 00-.714.714v.715h-.715A.716.716 0 005 2.143c0 .393.321.714.714.714h.715V3.93L3.65 5.32a1.429 1.429 0 00-.793 1.28v1.421L.85 8.914c-.514.222-.85.736-.85 1.3v3.357C0 14.357.643 15 1.429 15h4.285v-2.064c0-.715.486-1.372 1.186-1.486a1.428 1.428 0 011.671 1.407V15h4.286c.786 0 1.429-.643 1.429-1.429v-3.357c0-.564-.336-1.078-.85-1.307l-2.007-.893zm-4.286.915A1.07 1.07 0 016.07 7.857a1.07 1.07 0 011.072-1.071 1.07 1.07 0 011.071 1.071 1.07 1.07 0 01-1.07 1.073z"
        fill="#000"
        fillOpacity={0.3}
      />
    </svg>
  );
}

const MemoParish = React.memo(Parish);
export default MemoParish;
