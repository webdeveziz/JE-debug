// Задание #1

let health = Number(
  prompt('Введите число параметра "здоровье" для персонажа').trim()
)
console.log('🚀health', health)
debugger
if (health <= 0 || !health) {
  //  health < 0 || health!
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  debugger
  alert(`Параметр "здоровье" равен ${health}`)
}
