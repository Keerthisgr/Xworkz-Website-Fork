function validation(){
    let val = true;
    let nameValue = document.formName.nameName.value;
    alert('hey');
    if(nameValue.length <=10 && nameValue.length >=25){
        val=false;
    }
    return val;
}
