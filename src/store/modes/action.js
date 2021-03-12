export const modeChangeDark = (dark) => ({
  type: "modes/darkMode",
  payload: true,
});

export const modeChangeLight = (light) => ({
  type: "modes/lightMode",
  payload: false,
});
