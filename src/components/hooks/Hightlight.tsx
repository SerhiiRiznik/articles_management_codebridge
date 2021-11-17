
export const Hightlight = (data: any) => {
  let { search, string } = data
  if (!search) return string
  if (string === null) {
    string = ''
  }
  const regexp = new RegExp(search, "ig")
  const matchStr = string.match(regexp)
   
  if (matchStr) {
    return string.split(regexp).map((str: string, index: number, arr: any) => {
      if (index < arr.length - 1) {
        const val = matchStr.shift()
        return <span key={index}>{str}<span className="found">{val}</span></span>
      }
      return str;
    });
  }
  return string;
};