export const validateCode = (
  codeX: string,
  total: number
  ) : Boolean => {
    let regex: RegExp = /[;),\]]/;
    let bool: Boolean = false;
  
    for (let i = 0; i < 666; i ++) {
      const value = codeX.charAt(total).trim();
      if (value) {
        return regex.test(value) ? true: bool;
      }
      total++;
    }
    return bool;
  };