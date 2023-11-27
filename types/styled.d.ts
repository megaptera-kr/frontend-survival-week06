import 'styled-components';

type Typography = {
  fontSize: React.CSSProperties['fontSize'];
  lineHeight: React.CSSProperties['lineHeight'];
  letterSpacing: React.CSSProperties['letterSpacing'];
  fontWeight: React.CSSProperties['fontWeight'];
};

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      display_01: Typography;
      display_02: Typography;
      display_03: Typography;
      heading_01: Typography;
      heading_02: Typography;
      heading_03: Typography;
      subhead_01: Typography;
      subhead_02: Typography;
      subhead_03: Typography;
      body_01: Typography;
      body_02: Typography;
      body_03: Typography;
      body_04: Typography;
      body_05: Typography;
      body_06: Typography;
      caption: Typography;
    };

    palette: Partial<{
      transparent: string;
      black: string;
      white: string;

      red: string;
      'red-100': string;
      'red-200': string;
      'red-300': string;
      'red-400': string;
      'red-500': string;
      'red-700': string;
      'red-600': string;
      'red-800': string;
      'red-900': string;

      pink: string;
      'pink-100': string;
      'pink-200': string;
      'pink-300': string;
      'pink-400': string;
      'pink-500': string;
      'pink-600': string;
      'pink-700': string;
      'pink-800': string;
      'pink-900': string;

      purple: string;
      'purple-100': string;
      'purple-200': string;
      'purple-300': string;
      'purple-400': string;
      'purple-500': string;
      'purple-600': string;
      'purple-700': string;
      'purple-800': string;
      'purple-900': string;

      'deep-purple': string;
      'deep-purple-100': string;
      'deep-purple-200': string;
      'deep-purple-300': string;
      'deep-purple-400': string;
      'deep-purple-500': string;
      'deep-purple-600': string;
      'deep-purple-700': string;
      'deep-purple-800': string;
      'deep-purple-900': string;

      indigo: string;
      'indigo-100': string;
      'indigo-200': string;
      'indigo-300': string;
      'indigo-400': string;
      'indigo-500': string;
      'indigo-600': string;
      'indigo-700': string;
      'indigo-800': string;
      'indigo-900': string;

      blue: string;
      'blue-100': string;
      'blue-200': string;
      'blue-300': string;
      'blue-400': string;
      'blue-500': string;
      'blue-600': string;
      'blue-700': string;
      'blue-800': string;
      'blue-900': string;

      'light-blue': string;
      'light-blue-100': string;
      'light-blue-200': string;
      'light-blue-300': string;
      'light-blue-400': string;
      'light-blue-500': string;
      'light-blue-600': string;
      'light-blue-700': string;
      'light-blue-800': string;
      'light-blue-900': string;

      cyan: string;
      'cyan-100': string;
      'cyan-200': string;
      'cyan-300': string;
      'cyan-400': string;
      'cyan-500': string;
      'cyan-600': string;
      'cyan-700': string;
      'cyan-800': string;
      'cyan-900': string;
      'cyan-1000': string;

      teal: string;
      'teal-100': string;
      'teal-200': string;
      'teal-300': string;
      'teal-400': string;
      'teal-500': string;
      'teal-600': string;
      'teal-700': string;
      'teal-800': string;
      'teal-900': string;

      green: string;
      'green-100': string;
      'green-200': string;
      'green-300': string;
      'green-400': string;
      'green-500': string;
      'green-600': string;
      'green-700': string;
      'green-800': string;
      'green-900': string;

      'light-green': string;
      'light-green-100': string;
      'light-green-200': string;
      'light-green-300': string;
      'light-green-400': string;
      'light-green-500': string;
      'light-green-600': string;
      'light-green-700': string;
      'light-green-800': string;
      'light-green-900': string;

      lime: string;
      'lime-100': '#f0f4c3';
      'lime-200': '#e6ee9c';
      'lime-300': '#dce775';
      'lime-400': '#d4e157';
      'lime-500': '#cddc39';
      'lime-600': '#c0ca33';
      'lime-700': '#afb42b';
      'lime-800': '#9e9d24';
      'lime-900': '#827717';

      yellow: string;
      'yellow-100': string;
      'yellow-200': string;
      'yellow-300': string;
      'yellow-400': string;
      'yellow-500': string;
      'yellow-600': string;
      'yellow-700': string;
      'yellow-800': string;
      'yellow-900': string;

      amber: string;
      'amber-100': string;
      'amber-200': string;
      'amber-300': string;
      'amber-400': string;
      'amber-500': string;
      'amber-600': string;
      'amber-700': string;
      'amber-800': string;
      'amber-900': string;

      orange: string;
      'orange-100': string;
      'orange-200': string;
      'orange-300': string;
      'orange-400': string;
      'orange-500': string;
      'orange-600': string;
      'orange-700': string;
      'orange-800': string;
      'orange-900': string;

      'deep-orange': string;
      'deep-orange-100': string;
      'deep-orange-200': string;
      'deep-orange-300': string;
      'deep-orange-400': string;
      'deep-orange-500': string;
      'deep-orange-600': string;
      'deep-orange-700': string;
      'deep-orange-800': string;
      'deep-orange-900': string;

      grey: string;
      'grey-100': string;
      'grey-200': string;
      'grey-300': string;
      'grey-400': string;
      'grey-500': string;
      'grey-600': string;
      'grey-700': string;
      'grey-800': string;
      'grey-900': string;

      'blue-grey': string;
      'blue-grey-50': string;
      'blue-grey-100': string;
      'blue-grey-200': string;
      'blue-grey-300': string;
      'blue-grey-400': string;
      'blue-grey-500': string;
      'blue-grey-600': string;
      'blue-grey-700': string;
      'blue-grey-800': string;
      'blue-grey-900': string;

      'grey-contrast': string;
      'grey-100-contrast': string;
      'grey-200-contrast': string;
      'grey-300-contrast': string;
      'grey-400-contrast': string;
      'grey-500-contrast': string;
      'grey-600-contrast': string;
      'grey-700-contrast': string;
      'grey-800-contrast': string;
      'grey-900-contrast': string;

      'blue-grey-contrast': string;
      'blue-grey-100-contrast': string;
      'blue-grey-200-contrast': string;
      'blue-grey-300-contrast': string;
      'blue-grey-400-contrast': string;
      'blue-grey-500-contrast': string;
      'blue-grey-600-contrast': string;
      'blue-grey-700-contrast': string;
      'blue-grey-800-contrast': string;
      'blue-grey-900-contrast': string;
    }>;
  }
}
