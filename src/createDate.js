
const createDate =() =>{
    return new Date().toLocaleString('en-Ca', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute:'2-digit'});
}
export default createDate;