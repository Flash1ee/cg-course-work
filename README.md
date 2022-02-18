Моделирование поверхностей на основе конструктивной сплошной геометрии с использованием технологии RayMarching.
====
Сборка РПЗ:
```bash
Из корня
mkdir build && cd build
cmake ..
make
```
Запуск приложения
```bash
cd ./app
python3 -m http.server 8000
---------------------------------------
открыть в браузере http://localhost:8000
```
Технологии:
- `JavaScript` - основной язык, на котором реализовано приложение;
- `ThreeJS` - камера, загрузка шейдеров, отрисовка;
- `dat.GUI` - графический интерфейс;
- `stats.js` - монторинг, отслеживание FPS;
- `Raymarching` - технология трассировки лучей;
- `CSG` - конструктивная сплошная геометрия;
- `python3` - веб сервер;
- Фрагментный и вершинный шейдеры для выполнения вычислений на видеокарте;

Презентация к защите:  
[Ссылка](https://docs.google.com/presentation/d/1EB2a5_lH6g7-nZFsFD9Kmzqfty5CX2mflLhmLZ2C4jo/edit?usp=sharing)  

Основные источники:
- http://iquilezles.org/www/articles/distfunctions/distfunctions.htm
- https://en.wikipedia.org/wiki/Constructive_solid_geometry
