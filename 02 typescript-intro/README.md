# Operadores en TypeScript / JavaScript: `??`, `||` y `!`

## 🔹 1. Operador `??` (Nullish Coalescing)

El operador `??` se usa para asignar un valor por defecto **solo cuando el valor es `null` o `undefined`**.

### Sintaxis

```ts
valor ?? valorPorDefecto
```

### Ejemplos

```ts
const a = null ?? 'default';        // 'default'
const b = undefined ?? 'default';  // 'default'
const c = 'hola' ?? 'default';     // 'hola'
const d = 0 ?? 10;                 // 0
const e = '' ?? 'texto';           // ''
```
## 🔹 2. Operador `||` (OR lógico)

El operador `||` también puede usarse para valores por defecto, pero funciona diferente.

### Sintaxis

```ts
valor || valorPorDefecto
```

### Ejemplos

```ts
const a = null || 'default';   // 'default'
const b = 0 || 10;            // 10 ❌
const c = '' || 'texto';      // 'texto' ❌
const d = false || true;      // true ❌
```

### ⚠️ Problema

`||` considera como "vacío" cualquier valor **falsy**:

* `false`
* `0`
* `''` (string vacío)
* `null`
* `undefined`

## 🔹 3. Operador `!` (Non-null assertion)

El operador `!` es exclusivo de TypeScript.

Sirve para decirle al compilador:

> "Este valor NO es `null` ni `undefined`, confía en mí"

### Ejemplo

```ts
const title = route.title!;
```



## 🧠 Resumen final

* `??` → valor por defecto solo para `null`/`undefined` ✅
* `||` → valor por defecto para cualquier valor falsy ⚠️
* `!` → le dice a TypeScript que confíe en ti (sin validación real) ⚠️

---
