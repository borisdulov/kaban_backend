import { Dependency } from "../domain/entity/dependency";

export class DIContainer {
  deps: Map<string, Dependency> = new Map();

  put<D extends Dependency, T extends D>(
    as: abstract new () => D,
    impl: T
  ): void {
    if (!(impl instanceof Dependency))
      throw `❌ Не удалось зарегистировать зависимость:  ${as.name} `;

    console.info(
      `🔧 Регистрация зависимости ${as.name} [${impl.constructor.name}]`
    );
    this.deps.set(as.name, impl);
  }

  get<T extends Dependency>(as: abstract new () => T): T {
    const finded = this.deps.get(as.name);
    if (!finded) throw `Dependency ${as.name} not registed`;
    return finded as T;
  }
}
