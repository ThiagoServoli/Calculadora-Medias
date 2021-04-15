// Aqui começa nosso teste !!!!!!!!!!!!!

const somarMediaM1 = document.getElementById('somar');
somarMediaM1.addEventListener('click', calcMedia1);
const somarMedia1 = document.getElementById('m1');
somarMedia1.addEventListener('click', calcMedia1);

function calcMedia1(){
   
    let m1 = document.getElementById('cx1');
    let m2 = document.getElementById('cx2');
    let m3 = document.getElementById('cx3');
    let m4 = document.getElementById('cx4');
    let res = document.getElementById('result');

    var n1 = Number(m1.value);
    var n2 = Number(m2.value);
    var n3 = Number(m3.value);
    var n4 = Number(m4.value);

    let somaNotas = n1 + n2 + n3 + n4;
    let divNotas = somaNotas / 4;

    const media = 5.0;

    if(divNotas >= media){

        res.innerHTML = `Após fazer os calculos a soma das suas notas foi <strong>${divNotas}</strong> e você está <strong>APROVADO PARABÉNS :)</strong> `;

    }

    else{
        res.innerHTML = `A soma das suas notas foi de <strong>${divNotas}</strong> e você está  <strong>REPROVADO :(</strong> `;
    }

}

const somarMediaM2 = document.getElementById('somar');
somarMediaM2.addEventListener('click', calcMedia2);
const somarMedia2 = document.getElementById('m2');
somarMedia2.addEventListener('click', calcMedia2);

function calcMedia2(){
   
    let m1 = document.getElementById('cx1');
    let m2 = document.getElementById('cx2');
    let m3 = document.getElementById('cx3');
    let m4 = document.getElementById('cx4');
    let res = document.getElementById('result');

    var n1 = Number(m1.value);
    var n2 = Number(m2.value);
    var n3 = Number(m3.value);
    var n4 = Number(m4.value);

    let somaNotas = n1 + n2 + n3 + n4;
    let divNotas = somaNotas / 4;

    const media = 5.5;

    if(divNotas >= media){

        res.innerHTML = `Após fazer os calculos a soma das suas notas foi <strong>${divNotas}</strong> e você está <strong>APROVADO PARABÉNS :)</strong> `;

    }

    else{
        res.innerHTML = `A soma das suas notas foi de <strong>${divNotas}</strong> e você está  <strong>REPROVADO :(</strong> `;
    }

}
const somarMediaM3 = document.getElementById('somar');
somarMediaM3.addEventListener('click', calcMedia3);
const somarMedia3 = document.getElementById('m3');
somarMedia3.addEventListener('click', calcMedia3);

function calcMedia3(){
   
    let m1 = document.getElementById('cx1');
    let m2 = document.getElementById('cx2');
    let m3 = document.getElementById('cx3');
    let m4 = document.getElementById('cx4');
    let res = document.getElementById('result');

    var n1 = Number(m1.value);
    var n2 = Number(m2.value);
    var n3 = Number(m3.value);
    var n4 = Number(m4.value);

    let somaNotas = n1 + n2 + n3 + n4;
    let divNotas = somaNotas / 4;

    const media = 6.0;

    if(divNotas >= media){

        res.innerHTML = `Após fazer os calculos a soma das suas notas foi <strong>${divNotas}</strong> e você está <strong>APROVADO PARABÉNS :)</strong> `;

    }

    else{
        res.innerHTML = `A soma das suas notas foi de <strong>${divNotas}</strong> e você está  <strong>REPROVADO :(</strong> `;
    }

}

const somarMediaM4 = document.getElementById('somar');
somarMediaM4.addEventListener('click', calcMedia4);
const somarMedia4 = document.getElementById('m4');
somarMedia4.addEventListener('click', calcMedia4);

function calcMedia4(){
   
    let m1 = document.getElementById('cx1');
    let m2 = document.getElementById('cx2');
    let m3 = document.getElementById('cx3');
    let m4 = document.getElementById('cx4');
    let res = document.getElementById('result');

    var n1 = Number(m1.value);
    var n2 = Number(m2.value);
    var n3 = Number(m3.value);
    var n4 = Number(m4.value);

    let somaNotas = n1 + n2 + n3 + n4;
    let divNotas = somaNotas / 4;

    const media = 7.0;

    if(divNotas >= media){

        res.innerHTML = `Após fazer os calculos a soma das suas notas foi <strong>${divNotas}</strong> e você está <strong>APROVADO PARABÉNS :)</strong> `;

    }

    else{
        res.innerHTML = `A soma das suas notas foi de <strong>${divNotas}</strong> e você está  <strong>REPROVADO :(</strong> `;
    }

}

