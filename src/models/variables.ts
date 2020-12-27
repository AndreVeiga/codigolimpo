interface Variable {
  description: string;
  result: boolean;
  value: number;
}

class VariableImpl {
 
  variable: Variable;

  constructor(variable: Variable){
    this.variable = variable;
  }
}

export default [
  new VariableImpl({ description: 'Nome com propositos.', result: true, value: 2 }),
];