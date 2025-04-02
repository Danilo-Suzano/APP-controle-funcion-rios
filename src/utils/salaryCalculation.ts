export function calcularInss(salario: number): number {
    let taxaInss = 0;
    
    if (salario < 1500) {
        taxaInss = 0.10; 
    } else if (salario >= 1500 && salario < 4000) {
        taxaInss = 0.12; 
    } else if (salario >= 4000 && salario < 6000) {
        taxaInss = 0.14; 
    } else {
        taxaInss = 0.15; 
    }
    
    return salario * taxaInss;
}

export function calcularIrf(salario: number): number {
    return salario * 0.10; 
}

export function calcularSalarioLiquido(salario: number): {
    salario: number;
    inss: number;
    irf: number;
    liquido: number;
} {
    const inss = calcularInss(salario);
    const irf = calcularIrf(salario);
    const liquido = salario - inss - irf;
    
    return {
        salario,
        inss,
        irf,
        liquido
    };
}