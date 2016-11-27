class Theme {
  constructor(name, foreground, background, grid, cursor, bar, barBorder, icon, colors) {
    this.name = name;
    this.foreground = foreground;
    this.background = background;
    this.grid = grid;
    this.cursor = cursor;
    this.bar = bar;
    this.barBorder = barBorder;
    this.icon = icon;
    this.colors = colors;
  }
}

var themes = new Array();

// Stereokai theme sourced from https://github.com/carlcalderon/sublime-color-schemes/blob/master/Stereokai/Stereokai.tmTheme
themes.push(new Theme(
  "Stereokai",
  "#f8f2f2",
  "#262626",
  "#2b2b2b",
  "#ffffff",
  "#f8f8f0",
  "#d0d0d0",
  "#2b2b2b",
  [
    "#262626",
    "#529bff",
    "#a6e22e",
    "#1a83a6",
    "#cc0000",
    "#d81dc3",
    "#cfcf19",
    "#d0d0d0",
    "#7c7c7c",
    "#0383f5",
    "#74ff79",
    "#58c2e5",
    "#fb4d53",
    "#f63ba3",
    "#cccc81",
    "#f8f8f0",
  ]
));

// Solarized theme sourced from http://ethanschoonover.com/solarized
themes.push(new Theme(
  "Solarized",
  "#839496",
  "#002b36",
  "#073642",
  "#586e75",
  "#fdf6e3",
  "#eee8d5",
  "#ff2b36",
  [
    "#002b36",
    "#073642",
    "#586e75",
    "#657b83",
    "#839496",
    "#93a1a1",
    "#eee8d5",
    "#fdf6e3",
    "#b58900",
    "#cb4b16",
    "#dc322f",
    "#d33682",
    "#6c71c4",
    "#268bd2",
    "#2aa198",
    "#859900"
  ]
));