/**
 * Number Props
 */
export type NumberProps = { 
  value: string|number,
  separator?: string,
  decimal?: string,
  decimals?: number,
  absolute?: boolean 
};

//function to format a number given the separator, decimal, and number of decimals to show
const formatNumber = (
  value: number, 
  separator: string, 
  decimal: string, 
  decimals?: number, 
  absolute = false
) => {
  //get the absolute value of the number
  const abs = Math.abs(value);
  //get the integer part of the number
  const integer = Math.floor(abs);
  //get the decimal part of the number
  const decimalPart = abs - integer;
  //get the number of decimals to show
  const decimalCount = Math.max(0, decimals || String(decimalPart).split('.')[1].length);
  //get the decimal part of the number as a string
  const decimalString = decimalCount ? decimal + decimalPart.toFixed(decimalCount).slice(2) : '';
  //get the integer part of the number as a string
  const integerString = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  //if the number is absolute, return the formatted number without the sign
  if (absolute) return integerString + decimalString;
  //return the formatted number with the sign
  return (value < 0 ? '-' : '') + integerString + decimalString;
};

/**
 * Number Format Component (Main)
 */
export default function NumberFormat(props: NumberProps) {
  const {
    value,
    separator = '',
    decimal = '.',
    decimals,
    absolute
  } = props;
  const number = formatNumber(
    Number(value) || 0, 
    separator, 
    decimal, 
    decimals, 
    absolute
  );
  return (<>{number}</>);
};