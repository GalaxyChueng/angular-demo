import 'reflect-metadata';

// classDecorator 类装饰器
function classDecorator<T extends new(...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

@classDecorator
class ClassDecoratorGreeter {
  property = 'property';
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

// functionDecorator 与访问器(Accessors)装饰器用法相同
function greeterDecorator(value: boolean) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    descriptor.enumerable = value;
    // descriptor.configurable = value;

    // console.log(target);
      // constructor: class Greeter2
      // greet: ƒ greet()

    // console.log(propertyKey);
      // greet

    // console.log(descriptor);
      // configurable: true
      // enumerable: false
      // value: ƒ greet()
      // writable: true
  };
}

// propDecorator 属性装饰器
const formatMetadataKey = Symbol('format');

function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class FunAndAccessorsAndPropGreeter {
  greeting: string;
  @format('Hello, %s')
  prop: string;

  constructor(message: string, prop: string) {
    this.greeting = message;
    this.prop = prop;
  }

  @greeterDecorator(false)
  greet() {
    return 'Hello, ' + this.greeting;
  }

  // @greeterDecorator(false)
  // get greeting() { return this.greeting; }

  propDecorator() {
    const formatString = getFormat(this, 'prop');
    return formatString.replace('%s', this.prop);
  }
}

// parameterDecorator 参数装饰器
const requiredMetadataKey = Symbol('required');
function required(target: object, propertyKey: string | symbol, parameterIndex: number) {
  const existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function() {
    const requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
    if (requiredParameters) {
      for (const parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error('Missing required argument.');
        }
      }
    }
    return method.apply(this, arguments);
  };
}

class ParameterGreeter {
  param: string;
  constructor(message: string) {
    this.param = message;
  }
  @validate
  greet(@required name: string, @required sex: string) {
    return 'Hello ' + name + ',' + sex + ',' + this.param;
  }
}



export function decoratorTest() {
  console.log('classDecorator: ');
  console.log(new ClassDecoratorGreeter('week')); // {property: "property", hello: "override", newProperty: "new property"}

  const g = new FunAndAccessorsAndPropGreeter('zyc', 'propTest');
  console.log('functionDecorator: ' + g.greet());
  console.log('propDecorator: ' + g.propDecorator());

  const g2 = new ParameterGreeter('string');
  console.log('parameterDecorator: ' + g2.greet('zyc', 'male'));
  console.log('parameterDecorator: ' + g2.greet('zyc')); // Error: Missing required argument.
}
