/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class HwService {
  private product = [
    // AMD CPUs
    {
      "id": 1,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 9 7950X",
      "price": 699,
      "info": "Ryzen 9 7950X es un procesador de 16 núcleos y 32 hilos con una frecuencia máxima de 5.70 GHz. Tiene un TDP de 170W y utiliza el socket AM5. Basado en la arquitectura Zen 4 con un proceso de fabricación de 5nm, cuenta con 64MB de caché L3. Lanzado en 2022, no incluye GPU integrada."
    },
    {
      "id": 2,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 9 7900X",
      "price": 549,
      "info": "Ryzen 9 7900X ofrece 12 núcleos y 24 hilos con una frecuencia máxima de 5.60 GHz. Su TDP es de 170W y utiliza el socket AM5. Se basa en la arquitectura Zen 4 con proceso de fabricación de 5nm y 64MB de caché L3. Lanzado en 2022, no tiene GPU integrada."
    },
    {
      "id": 3,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 7800X3D",
      "price": 449,
      "info": "Ryzen 7 7800X3D cuenta con 8 núcleos y 16 hilos, con una frecuencia máxima de 5.0 GHz y un TDP de 120W. Utiliza el socket AM5, basado en la arquitectura Zen 4 y un proceso de 5nm, con 96MB de caché L3 (tecnología 3D V-cache). Lanzado en 2022, no incluye GPU integrada."
    },
    {
      "id": 4,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 7700X",
      "price": 399,
      "info": "Ryzen 7 7700X ofrece 8 núcleos y 16 hilos con una frecuencia máxima de 5.4 GHz y un TDP de 105W. Utiliza el socket AM5, basado en la arquitectura Zen 4 y un proceso de fabricación de 5nm, con 32MB de caché L3. Lanzado en 2022, no incluye GPU integrada."
    },
    {
      "id": 5,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 7600X",
      "price": 299,
      "info": "Ryzen 5 7600X tiene 6 núcleos y 12 hilos, con una frecuencia máxima de 5.3 GHz y un TDP de 105W. Utiliza el socket AM5, basado en la arquitectura Zen 4 y un proceso de fabricación de 5nm, con 32MB de caché L3. Lanzado en 2022, no incluye GPU integrada."
    },
    {
      "id": 6,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 7600",
      "price": 259,
      "info": "Ryzen 5 7600 cuenta con 6 núcleos y 12 hilos, una frecuencia máxima de 5.1 GHz y un TDP de 65W. Utiliza el socket AM5 y se basa en la arquitectura Zen 4 con un proceso de 5nm. Tiene 32MB de caché L3 y GPU integrada. Lanzado en 2022."
    },
    {
      "id": 7,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 7700",
      "price": 349,
      "info": "Ryzen 7 7700 ofrece 8 núcleos y 16 hilos con una frecuencia máxima de 5.3 GHz y un TDP de 65W. Utiliza el socket AM5 y está basado en la arquitectura Zen 4 con proceso de 5nm, con 32MB de caché L3 y GPU integrada. Lanzado en 2022."
    },
    {
      "id": 8,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 9 7900",
      "price": 419,
      "info": "Ryzen 9 7900 cuenta con 12 núcleos y 24 hilos, con una frecuencia máxima de 5.4 GHz y un TDP de 65W. Utiliza el socket AM5 y está basado en la arquitectura Zen 4 con un proceso de fabricación de 5nm, con 64MB de caché L3 y GPU integrada. Lanzado en 2022."
    },
    {
      "id": 9,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 9 5950X",
      "price": 799,
      "info": "Ryzen 9 5950X tiene 16 núcleos y 32 hilos con una frecuencia máxima de 4.9 GHz y un TDP de 105W. Utiliza el socket AM4 y está basado en la arquitectura Zen 3 con proceso de 7nm, con 64MB de caché L3. Lanzado en 2020, no incluye GPU integrada."
    },
    {
      "id": 10,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 9 5900X",
      "price": 549,
      "info": "Ryzen 9 5900X ofrece 12 núcleos y 24 hilos con una frecuencia máxima de 4.8 GHz y un TDP de 105W. Utiliza el socket AM4 y está basado en la arquitectura Zen 3 con proceso de 7nm, con 64MB de caché L3. Lanzado en 2020, no tiene GPU integrada."
    },
    {
      "id": 11,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 5800X3D",
      "price": 449,
      "info": "Ryzen 7 5800X3D cuenta con 8 núcleos y 16 hilos, con una frecuencia máxima de 4.5 GHz y un TDP de 105W. Utiliza el socket AM4 y está basado en la arquitectura Zen 3 con proceso de 7nm, con 96MB de caché L3 (tecnología 3D V-cache). Lanzado en 2022, no incluye GPU integrada."
    },
    {
      "id": 12,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 5800X",
      "price": 449,
      "info": "Ryzen 7 5800X tiene 8 núcleos y 16 hilos, con una frecuencia máxima de 4.7 GHz y un TDP de 105W. Utiliza el socket AM4 y está basado en la arquitectura Zen 3 con proceso de 7nm, con 32MB de caché L3. Lanzado en 2020, no tiene GPU integrada."
    },
    {
      "id": 13,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 5600X",
      "price": 299,
      "info": "Ryzen 5 5600X ofrece 6 núcleos y 12 hilos con una frecuencia máxima de 4.6 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen 3 con proceso de 7nm, con 32MB de caché L3. Lanzado en 2020, no incluye GPU integrada."
    },
    {
      "id": 14,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 5600",
      "price": 229,
      "info": "Ryzen 5 5600 tiene 6 núcleos y 12 hilos, con una frecuencia máxima de 4.4 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen 3 con proceso de 7nm, con 32MB de caché L3. Lanzado en 2021, no incluye GPU integrada."
    },
    {
      "id": 15,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 5700G",
      "price": 359,
      "info": "Ryzen 7 5700G cuenta con 8 núcleos y 16 hilos, con una frecuencia máxima de 4.6 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen 3 con proceso de 7nm, con 16MB de caché L3 y gráficos Radeon Vega integrados. Lanzado en 2021."
    },
    {
      "id": 16,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 5700G",
      "price": 289,
      "info": "Ryzen 5 5700G ofrece 6 núcleos y 12 hilos, con una frecuencia máxima de 4.6 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen 3 con proceso de 7nm, con 16MB de caché L3 y gráficos Radeon Vega integrados. Lanzado en 2021."
    },
    {
      "id": 17,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 3 5300G",
      "price": 199,
      "info": "Ryzen 3 5300G cuenta con 4 núcleos y 8 hilos, con una frecuencia máxima de 4.2 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen 3 con proceso de 7nm, con 8MB de caché L3 y gráficos Radeon Vega integrados. Lanzado en 2021."
    },
    {
      "id": 18,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 3 5100",
      "price": 179,
      "info": "Ryzen 3 5100 tiene 4 núcleos y 8 hilos, con una frecuencia máxima de 4.4 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen 3 con proceso de 7nm, con 8MB de caché L3. Lanzado en 2021."
    },
    {
      "id": 19,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 9 3950X",
      "price": 749,
      "info": "Ryzen 9 3950X ofrece 16 núcleos y 32 hilos, con una frecuencia máxima de 4.7 GHz y un TDP de 105W. Utiliza el socket AM4 y está basado en la arquitectura Zen 2 con proceso de 7nm, con 64MB de caché L3. Lanzado en 2019."
    },
    {
      "id": 20,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 9 3900X",
      "price": 499,
      "info": "Ryzen 9 3900X cuenta con 12 núcleos y 24 hilos, con una frecuencia máxima de 4.6 GHz y un TDP de 105W. Utiliza el socket AM4 y está basado en la arquitectura Zen 2 con proceso de 7nm, con 64MB de caché L3. Lanzado en 2019."
    },
    {
      "id": 21,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 3800X",
      "price": 399,
      "info": "Ryzen 7 3800X ofrece 8 núcleos y 16 hilos, con una frecuencia máxima de 4.5 GHz y un TDP de 105W. Utiliza el socket AM4 y está basado en la arquitectura Zen 2 con proceso de 7nm, con 32MB de caché L3. Lanzado en 2019."
    },
    {
      "id": 22,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 3700X",
      "price": 329,
      "info": "Ryzen 7 3700X tiene 8 núcleos y 16 hilos, con una frecuencia máxima de 4.4 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen 2 con proceso de 7nm, con 32MB de caché L3. Lanzado en 2019."
    },
    {
      "id": 23,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 3600X",
      "price": 249,
      "info": "Ryzen 5 3600X cuenta con 6 núcleos y 12 hilos, con una frecuencia máxima de 4.4 GHz y un TDP de 95W. Utiliza el socket AM4 y está basado en la arquitectura Zen 2 con proceso de 7nm, con 32MB de caché L3. Lanzado en 2019."
    },
    {
      "id": 24,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 3600",
      "price": 199,
      "info": "Ryzen 5 3600 ofrece 6 núcleos y 12 hilos, con una frecuencia máxima de 4.2 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen 2 con proceso de 7nm, con 32MB de caché L3. Lanzado en 2019."
    },
    {
      "id": 25,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 3500X",
      "price": 229,
      "info": "Ryzen 5 3500X tiene 6 núcleos y 6 hilos, con una frecuencia máxima de 4.1 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen 2 con proceso de 7nm, con 32MB de caché L3. Lanzado en 2019."
    },
    {
      "id": 26,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 3 3300X",
      "price": 139,
      "info": "Ryzen 3 3300X cuenta con 4 núcleos y 8 hilos, con una frecuencia máxima de 4.3 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen 2 con proceso de 7nm, con 16MB de caché L3. Lanzado en 2020."
    },
    {
      "id": 27,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 3 3100",
      "price": 109,
      "info": "Ryzen 3 3100 ofrece 4 núcleos y 8 hilos, con una frecuencia máxima de 3.9 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen 2 con proceso de 7nm, con 16MB de caché L3. Lanzado en 2020."
    },
    {
      "id": 28,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 3400G",
      "price": 249,
      "info": "Ryzen 5 3400G cuenta con 4 núcleos y 8 hilos, con una frecuencia máxima de 4.2 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen+ con proceso de 12nm, con 4MB de caché L3 y gráficos Radeon Vega integrados. Lanzado en 2019."
    },
    {
      "id": 29,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 3 3200G",
      "price": 149,
      "info": "Ryzen 3 3200G ofrece 4 núcleos y 4 hilos, con una frecuencia máxima de 4.0 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen+ con proceso de 12nm, con 4MB de caché L3 y gráficos Radeon Vega integrados. Lanzado en 2019."
    },
    {
      "id": 30,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 2700X",
      "price": 329,
      "info": "Ryzen 7 2700X cuenta con 8 núcleos y 16 hilos, con una frecuencia máxima de 4.3 GHz y un TDP de 105W. Utiliza el socket AM4 y está basado en la arquitectura Zen+ con proceso de 12nm, con 16MB de caché L3. Lanzado en 2018."
    },
    {
      "id": 31,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 2700",
      "price": 299,
      "info": "Ryzen 7 2700 ofrece 8 núcleos y 16 hilos, con una frecuencia máxima de 4.1 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen+ con proceso de 12nm, con 16MB de caché L3. Lanzado en 2018."
    },
    {
      "id": 32,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 2600X",
      "price": 229,
      "info": "Ryzen 5 2600X tiene 6 núcleos y 12 hilos, con una frecuencia máxima de 4.2 GHz y un TDP de 95W. Utiliza el socket AM4 y está basado en la arquitectura Zen+ con proceso de 12nm, con 16MB de caché L3. Lanzado en 2018."
    },
    {
      "id": 33,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 2600",
      "price": 199,
      "info": "Ryzen 5 2600 cuenta con 6 núcleos y 12 hilos, con una frecuencia máxima de 4.1 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen+ con proceso de 12nm, con 16MB de caché L3. Lanzado en 2018."
    },
    {
      "id": 34,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 2500X",
      "price": 189,
      "info": "Ryzen 5 2500X ofrece 4 núcleos y 8 hilos, con una frecuencia máxima de 4.0 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen+ con proceso de 12nm, con 8MB de caché L3. Lanzado en 2018."
    },
    {
      "id": 35,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 3 2300X",
      "price": 129,
      "info": "Ryzen 3 2300X tiene 4 núcleos y 4 hilos, con una frecuencia máxima de 4.0 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen+ con proceso de 12nm, con 8MB de caché L3. Lanzado en 2018."
    },
    {
      "id": 36,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 2400G",
      "price": 169,
      "info": "Ryzen 5 2400G ofrece 4 núcleos y 8 hilos, con una frecuencia máxima de 3.9 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen con proceso de 14nm, con 4MB de caché L3 y gráficos Radeon Vega integrados. Lanzado en 2018."
    },
    {
      "id": 37,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 3 2200G",
      "price": 119,
      "info": "Ryzen 3 2200G tiene 4 núcleos y 4 hilos, con una frecuencia máxima de 3.7 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen con proceso de 14nm, con 4MB de caché L3 y gráficos Radeon Vega integrados. Lanzado en 2018."
    },
    {
      "id": 38,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 1800X",
      "price": 399,
      "info": "Ryzen 7 1800X ofrece 8 núcleos y 16 hilos, con una frecuencia máxima de 4.0 GHz y un TDP de 95W. Utiliza el socket AM4 y está basado en la arquitectura Zen con proceso de 14nm, con 16MB de caché L3. Lanzado en 2017."
    },
    {
      "id": 39,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 1700X",
      "price": 329,
      "info": "Ryzen 7 1700X tiene 8 núcleos y 16 hilos, con una frecuencia máxima de 3.8 GHz y un TDP de 95W. Utiliza el socket AM4 y está basado en la arquitectura Zen con proceso de 14nm, con 16MB de caché L3. Lanzado en 2017."
    },
    {
      "id": 40,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 7 1700",
      "price": 299,
      "info": "Ryzen 7 1700 ofrece 8 núcleos y 16 hilos, con una frecuencia máxima de 3.7 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen con proceso de 14nm, con 16MB de caché L3. Lanzado en 2017."
    },
    {
      "id": 41,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 5 1600",
      "price": 219,
      "info": "Ryzen 5 1600 cuenta con 6 núcleos y 12 hilos, con una frecuencia máxima de 3.6 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen con proceso de 14nm, con 16MB de caché L3. Lanzado en 2017."
    },
    {
      "id": 42,
      "id_category": 1,
      "brand": "AMD",
      "name": "AMD Ryzen 3 1200",
      "price": 109,
      "info": "Ryzen 3 1200 tiene 4 núcleos y 4 hilos, con una frecuencia máxima de 3.4 GHz y un TDP de 65W. Utiliza el socket AM4 y está basado en la arquitectura Zen con proceso de 14nm, con 8MB de caché L3. Lanzado en 2017."
    },
    // Intel CPUs
    {
      "id": 43,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel lCore i9-14900K",
      "price": 589,
      "info": "Procesador de alta gama con 24 núcleos y 32 hilos. Frecuencia máxima de 5.8 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Raptor Lake Refresh fabricada en proceso Intel 7. 36 MB de caché L3. Incluye gráficos integrados Intel UHD Graphics 770. Lanzado en 2024."
    },
    {
      "id": 44,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i9-14900KF",
      "price": 564,
      "info": "Similar al i9-14900K pero sin gráficos integrados. 24 núcleos, 32 hilos, frecuencia máxima de 5.8 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Raptor Lake Refresh en proceso Intel 7. 36 MB de caché L3. Lanzado en 2024."
    },
    {
      "id": 45,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i7-14700K",
      "price": 409,
      "info": "Procesador de gama alta con 16 núcleos y 24 hilos. Frecuencia máxima de 5.6 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Raptor Lake Refresh en proceso Intel 7. 30 MB de caché L3. Incluye gráficos Intel UHD Graphics 770. Lanzado en 2024."
    },
    {
      "id": 46,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i7-14700KF",
      "price": 384,
      "info": "Versión sin gráficos integrados del i7-14700K. 16 núcleos, 24 hilos, frecuencia máxima de 5.6 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Raptor Lake Refresh en proceso Intel 7. 30 MB de caché L3. Lanzado en 2024."
    },
    {
      "id": 47,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-14600K",
      "price": 319,
      "info": "Procesador de gama media-alta con 14 núcleos y 20 hilos. Frecuencia máxima de 5.3 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Raptor Lake Refresh en proceso Intel 7. 24 MB de caché L3. Incluye gráficos Intel UHD Graphics 770. Lanzado en 2024."
    },
    {
      "id": 48,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-14600KF",
      "price": 294,
      "info": "Similar al i5-14600K pero sin gráficos integrados. 14 núcleos, 20 hilos, frecuencia máxima de 5.3 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Raptor Lake Refresh en proceso Intel 7. 24 MB de caché L3. Lanzado en 2024."
    },
    {
      "id": 49,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i9-13900K",
      "price": 589,
      "info": "Procesador tope de gama con 24 núcleos y 32 hilos. Frecuencia máxima de 5.8 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Raptor Lake en proceso Intel 7. 36 MB de caché L3. Incluye gráficos Intel UHD Graphics 770. Lanzado en 2022."
    },
    {
      "id": 50,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i7-13700K",
      "price": 409,
      "info": "Procesador de alto rendimiento con 16 núcleos y 24 hilos. Frecuencia máxima de 5.4 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Raptor Lake en proceso Intel 7. 30 MB de caché L3. Incluye gráficos Intel UHD Graphics 770. Lanzado en 2022."
    },
    {
      "id": 51,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-13600K",
      "price": 319,
      "info": "Procesador de gama media-alta con 14 núcleos y 20 hilos. Frecuencia máxima de 5.1 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Raptor Lake en proceso Intel 7. 24 MB de caché L3. Incluye gráficos Intel UHD Graphics 770. Lanzado en 2022."
    },
    {
      "id": 52,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-13400",
      "price": 221,
      "info": "Procesador de gama media con 10 núcleos y 16 hilos. Frecuencia máxima de 4.6 GHz, TDP de 65W. Socket LGA 1700. Arquitectura Raptor Lake en proceso Intel 7. 20 MB de caché L3. Incluye gráficos Intel UHD Graphics 730. Lanzado en 2023."
    },
    {
      "id": 53,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i3-13100",
      "price": 134,
      "info": "Procesador de entrada con 4 núcleos y 8 hilos. Frecuencia máxima de 4.5 GHz, TDP de 60W. Socket LGA 1700. Arquitectura Raptor Lake en proceso Intel 7. 12 MB de caché L3. Incluye gráficos Intel UHD Graphics 730. Lanzado en 2023."
    },
    {
      "id": 54,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i9-12900K",
      "price": 589,
      "info": "Procesador de alto rendimiento con 16 núcleos y 24 hilos. Frecuencia máxima de 5.2 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Alder Lake en proceso Intel 7. 30 MB de caché L3. Incluye gráficos Intel UHD Graphics 770. Lanzado en 2021."
    },
    {
      "id": 55,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i7-12700K",
      "price": 409,
      "info": "Procesador de gama alta con 12 núcleos y 20 hilos. Frecuencia máxima de 5.0 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Alder Lake en proceso Intel 7. 25 MB de caché L3. Incluye gráficos Intel UHD Graphics 770. Lanzado en 2021."
    },
    {
      "id": 56,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-12600K",
      "price": 289,
      "info": "Procesador de gama media-alta con 10 núcleos y 16 hilos. Frecuencia máxima de 4.9 GHz, TDP de 125W. Socket LGA 1700. Arquitectura Alder Lake en proceso Intel 7. 20 MB de caché L3. Incluye gráficos Intel UHD Graphics 770. Lanzado en 2021."
    },
    {
      "id": 57,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-12400",
      "price": 192,
      "info": "Procesador de gama media con 6 núcleos y 12 hilos. Frecuencia máxima de 4.4 GHz, TDP de 65W. Socket LGA 1700. Arquitectura Alder Lake en proceso Intel 7. 18 MB de caché L3. Incluye gráficos Intel UHD Graphics 730. Lanzado en 2022."
    },
    {
      "id": 58,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i3-12100",
      "price": 122,
      "info": "Procesador de entrada con 4 núcleos y 8 hilos. Frecuencia máxima de 4.3 GHz, TDP de 60W. Socket LGA 1700. Arquitectura Alder Lake en proceso Intel 7. 12 MB de caché L3. Incluye gráficos Intel UHD Graphics 730. Lanzado en 2022."
    },
    {
      "id": 59,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i9-11900K",
      "price": 539,
      "info": "Procesador de alto rendimiento con 8 núcleos y 16 hilos. Frecuencia máxima de 5.3 GHz, TDP de 125W. Socket LGA 1200. Arquitectura Rocket Lake en proceso de 14nm. 16 MB de caché L3. Incluye gráficos Intel UHD Graphics 750. Lanzado en 2021."
    },
    {
      "id": 60,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i7-11700K",
      "price": 399,
      "info": "Procesador de gama alta con 8 núcleos y 16 hilos. Frecuencia máxima de 5.0 GHz, TDP de 125W. Socket LGA 1200. Arquitectura Rocket Lake en proceso de 14nm. 16 MB de caché L3. Incluye gráficos Intel UHD Graphics 750. Lanzado en 2021."
    },
    {
      "id": 61,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-11600K",
      "price": 262,
      "info": "Procesador de gama media-alta con 6 núcleos y 12 hilos. Frecuencia máxima de 4.9 GHz, TDP de 125W. Socket LGA 1200. Arquitectura Rocket Lake en proceso de 14nm. 12 MB de caché L3. Incluye gráficos Intel UHD Graphics 750. Lanzado en 2021."
    },
    {
      "id": 62,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-11400",
      "price": 182,
      "info": "Procesador de gama media con 6 núcleos y 12 hilos. Frecuencia máxima de 4.4 GHz, TDP de 65W. Socket LGA 1200. Arquitectura Rocket Lake en proceso de 14nm. 12 MB de caché L3. Incluye gráficos Intel UHD Graphics 730. Lanzado en 2021."
    },
    {
      "id": 63,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i3-11100",
      "price": 122,
      "info": "Procesador de entrada con 4 núcleos y 8 hilos. Frecuencia máxima de 4.4 GHz, TDP de 60W. Socket LGA 1200. Arquitectura Rocket Lake en proceso de 14nm. 12 MB de caché L3. Incluye gráficos Intel UHD Graphics 730. Lanzado en 2021."
    },
    {
      "id": 64,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i9-10900K",
      "price": 488,
      "info": "Procesador de alto rendimiento con 10 núcleos y 20 hilos. Frecuencia máxima de 5.3 GHz, TDP de 125W. Socket LGA 1200. Arquitectura Comet Lake en proceso de 14nm. 20 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2020."
    },
    {
      "id": 65,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i7-10700K",
      "price": 374,
      "info": "Procesador de gama alta con 8 núcleos y 16 hilos. Frecuencia máxima de 5.1 GHz, TDP de 125W. Socket LGA 1200. Arquitectura Comet Lake en proceso de 14nm. 16 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2020."
    },
    {
      "id": 66,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-10600K",
      "price": 262,
      "info": "Procesador de gama media-alta con 6 núcleos y 12 hilos. Frecuencia máxima de 4.8 GHz, TDP de 125W. Socket LGA 1200. Arquitectura Comet Lake en proceso de 14nm. 12 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2020."
    },
    {
      "id": 67,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-10400",
      "price": 182,
      "info": "Procesador de gama media con 6 núcleos y 12 hilos. Frecuencia máxima de 4.3 GHz, TDP de 65W. Socket LGA 1200. Arquitectura Comet Lake en proceso de 14nm. 12 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2020."
    },
    {
      "id": 68,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i3-10100",
      "price": 122,
      "info": "Procesador de entrada con 4 núcleos y 8 hilos. Frecuencia máxima de 4.3 GHz, TDP de 65W. Socket LGA 1200. Arquitectura Comet Lake en proceso de 14nm. 6 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2020."
    },
    {
      "id": 69,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i9-9900K",
      "price": 488,
      "info": "Procesador de alto rendimiento con 8 núcleos y 16 hilos. Frecuencia máxima de 5.0 GHz, TDP de 95W. Socket LGA 1151. Arquitectura Coffee Lake Refresh en proceso de 14nm. 16 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2018."
    },
    {
      "id": 70,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i7-9700K",
      "price": 374,
      "info": "Procesador de gama alta con 8 núcleos y 8 hilos. Frecuencia máxima de 4.9 GHz, TDP de 95W. Socket LGA 1151. Arquitectura Coffee Lake Refresh en proceso de 14nm. 12 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2018."
    },
    {
      "id": 71,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-9600K",
      "price": 262,
      "info": "Procesador de gama media-alta con 6 núcleos y 6 hilos. Frecuencia máxima de 4.6 GHz, TDP de 95W. Socket LGA 1151. Arquitectura Coffee Lake Refresh en proceso de 14nm. 9 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2018."
    },
    {
      "id": 72,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-9400",
      "price": 182,
      "info": "Procesador de gama media con 6 núcleos y 6 hilos. Frecuencia máxima de 4.1 GHz, TDP de 65W. Socket LGA 1151. Arquitectura Coffee Lake Refresh en proceso de 14nm. 9 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2019."
    },
    {
      "id": 73,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i3-9100",
      "price": 122,
      "info": "Procesador de entrada con 4 núcleos y 4 hilos. Frecuencia máxima de 4.2 GHz, TDP de 65W. Socket LGA 1151. Arquitectura Coffee Lake Refresh en proceso de 14nm. 6 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2019."
    },
    {
      "id": 74,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i7-8700K",
      "price": 359,
      "info": "Procesador de gama alta con 6 núcleos y 12 hilos. Frecuencia máxima de 4.7 GHz, TDP de 95W. Socket LGA 1151. Arquitectura Coffee Lake en proceso de 14nm. 12 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2017."
    },
    {
      "id": 75,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i5-8600K",
      "price": 257,
      "info": "Procesador de gama media-alta con 6 núcleos y 6 hilos. Frecuencia máxima de 4.3 GHz, TDP de 95W. Socket LGA 1151. Arquitectura Coffee Lake en proceso de 14nm. 9 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2017."
    },
    {
      "id": 76,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i3-8350K",
      "price": 168,
      "info": "Procesador de gama media con 4 núcleos y 4 hilos. Frecuencia máxima de 4.0 GHz, TDP de 91W. Socket LGA 1151. Arquitectura Coffee Lake en proceso de 14nm. 8 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2017."
    },
    {
      "id": 77,
      "id_category": 2,
      "brand": "Intel",
      "name": "Intel Core i3-8100",
      "price": 117,
      "info": "Procesador de entrada con 4 núcleos y 4 hilos. Frecuencia máxima de 3.6 GHz, TDP de 65W. Socket LGA 1151. Arquitectura Coffee Lake en proceso de 14nm. 6 MB de caché L3. Incluye gráficos Intel UHD Graphics 630. Lanzado en 2017."
    },
    // Amd Motherboards
    {
      "id": 78,
      "id_category": 3,
      "brand": "ASUS",
      "name": "ASUS ROG Crosshair X670E Hero",
      "price": 699,
      "info": "Motherboard ASUS ROG Crosshair X670E Hero con chipset X670E, formato ATX, socket AM5. Soporta hasta 128GB de RAM DDR5 a 6400MHz, con 4 ranuras PCIe 5.0 y múltiples puertos USB 4.0 y 3.2. Incluye conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 79,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI MEG X670E ACE",
      "price": 599,
      "info": "Motherboard MSI MEG X670E ACE con chipset X670E, formato ATX, socket AM5. Soporta hasta 128GB de RAM DDR5 a 6600MHz, con ranuras PCIe 5.0, puertos USB 4.0, y almacenamiento M.2 PCIe 4.0. Conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 80,
      "id_category": 3,
      "brand": "Gigabyte",
      "name": "Gigabyte X670E Aorus Xtreme",
      "price": 849,
      "info": "Motherboard Gigabyte X670E Aorus Xtreme con chipset X670E, formato E-ATX, socket AM5. Ofrece hasta 128GB de RAM DDR5 a 6400MHz y ranuras PCIe 5.0. Incluye puertos USB 4.0, M.2 PCIe 4.0, y conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 81,
      "id_category": 3,
      "brand": "ASRock",
      "name": "ASRock X670E Taichi",
      "price": 589,
      "info": "Motherboard ASRock X670E Taichi con chipset X670E, formato ATX, socket AM5. Soporta 128GB de RAM DDR5 a 6400MHz, múltiples ranuras PCIe 5.0 y almacenamiento M.2 PCIe 4.0. Incluye conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 82,
      "id_category": 3,
      "brand": "ASUS",
      "name": "ASUS ProArt X670-Creator WiFi",
      "price": 499,
      "info": "Motherboard ASUS ProArt X670-Creator WiFi con chipset X670, formato ATX, socket AM5. Admite hasta 128GB de RAM DDR5 a 6400MHz. Ofrece ranuras PCIe 5.0, conectividad Ethernet 10G, WiFi 6E y puertos USB 4.0."
    },
    {
      "id": 83,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI MPG X670 Carbon WiFi",
      "price": 459,
      "info": "Motherboard MSI MPG X670 Carbon WiFi con chipset X670, formato ATX, socket AM5. Soporta hasta 128GB de RAM DDR5 a 6400MHz, con ranuras PCIe 5.0 y puertos USB 4.0. Conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 84,
      "id_category": 3,
      "brand": "Gigabyte",
      "name": "Gigabyte X670 Aorus Master",
      "price": 549,
      "info": "Motherboard Gigabyte X670 Aorus Master con chipset X670, formato ATX, socket AM5. Ofrece hasta 128GB de RAM DDR5 a 6400MHz, múltiples ranuras PCIe 5.0 y conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 85,
      "id_category": 3,
      "brand": "ASRock",
      "name": "ASRock X670E Steel Legend",
      "price": 389,
      "info": "Motherboard ASRock X670E Steel Legend con chipset X670E, formato ATX, socket AM5. Soporta hasta 128GB de RAM DDR5 a 6400MHz, PCIe 5.0 y conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 86,
      "id_category": 3,
      "brand": "ASUS",
      "name": "ASUS ROG Strix B650E-F Gaming WiFi",
      "price": 329,
      "info": "Motherboard ASUS ROG Strix B650E-F Gaming WiFi con chipset B650E, formato ATX, socket AM5. Soporta hasta 64GB de RAM DDR5 a 6400MHz, con ranuras PCIe 5.0 y conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 87,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI MPG B650E Carbon WiFi",
      "price": 299,
      "info": "Motherboard MSI MPG B650E Carbon WiFi con chipset B650E, formato ATX, socket AM5. Ofrece soporte para hasta 64GB de RAM DDR5 a 6400MHz, ranuras PCIe 5.0 y almacenamiento M.2 PCIe 4.0. Conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 88,
      "id_category": 3,
      "brand": "Gigabyte",
      "name": "Gigabyte B650E Aorus Master",
      "price": 349,
      "info": "Motherboard Gigabyte B650E Aorus Master con chipset B650E, formato ATX, socket AM5. Soporta hasta 64GB de RAM DDR5 a 6400MHz, con ranuras PCIe 5.0, puertos USB 4.0 y conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 89,
      "id_category": 3,
      "brand": "ASRock",
      "name": "ASRock B650E PG Riptide",
      "price": 259,
      "info": "Motherboard ASRock B650E PG Riptide con chipset B650E, formato ATX, socket AM5. Ofrece soporte para hasta 64GB de RAM DDR5 a 6400MHz, ranuras PCIe 5.0 y conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 90,
      "id_category": 3,
      "brand": "ASUS",
      "name": "ASUS TUF Gaming B650-Plus WiFi",
      "price": 229,
      "info": "Motherboard ASUS TUF Gaming B650-Plus WiFi con chipset B650, formato ATX, socket AM5. Soporta hasta 64GB de RAM DDR5 a 6400MHz, con ranuras PCIe 4.0 y conectividad Ethernet 2.5G y WiFi 6E."
    },
    {
      "id": 91,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI MAG B650 Tomahawk WiFi",
      "price": 259,
      "info": "Motherboard MSI MAG B650 Tomahawk WiFi con chipset B650, formato ATX, socket AM5. Soporta hasta 64GB de RAM DDR5 a 6400MHz, PCIe 4.0 y almacenamiento M.2 PCIe 4.0. Conectividad Ethernet 2.5G y WiFi 6E."
    },
    {
      "id": 92,
      "id_category": 3,
      "brand": "Gigabyte",
      "name": "Gigabyte B650 Aorus Elite AX",
      "price": 239,
      "info": "Motherboard Gigabyte B650 Aorus Elite AX con chipset B650, formato ATX, socket AM5. Soporta hasta 64GB de RAM DDR5 a 6400MHz, PCIe 4.0 y conectividad Ethernet 2.5G y WiFi 6E."
    },
    {
      "id": 93,
      "id_category": 3,
      "brand": "ASRock",
      "name": "ASRock B650 Pro RS",
      "price": 199,
      "info": "Motherboard ASRock B650 Pro RS con chipset B650, formato ATX, socket AM5. Ofrece soporte para hasta 64GB de RAM DDR5 a 6400MHz, PCIe 4.0 y conectividad Ethernet 2.5G y WiFi 6E."
    },
    {
      "id": 94,
      "id_category": 3,
      "brand": "ASUS",
      "name": "ASUS ROG Crosshair VIII Hero",
      "price": 379,
      "info": "Motherboard ASUS ROG Crosshair VIII Hero con chipset X570, formato ATX, socket AM4. Soporta hasta 128GB de RAM DDR4 a 4400MHz, con ranuras PCIe 4.0 y conectividad Ethernet 1G y WiFi 6."
    },
    {
      "id": 95,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI MEG X570 Unify",
      "price": 349,
      "info": "Motherboard MSI MEG X570 Unify con chipset X570, formato ATX, socket AM4. Ofrece soporte para hasta 128GB de RAM DDR4 a 4800MHz, ranuras PCIe 4.0 y múltiples opciones de almacenamiento M.2 PCIe 4.0."
    },
    {
      "id": 96,
      "id_category": 3,
      "brand": "Gigabyte",
      "name": "Gigabyte X570 Aorus Master",
      "price": 389,
      "info": "Motherboard Gigabyte X570 Aorus Master con chipset X570, formato ATX, socket AM4. Soporta hasta 128GB de RAM DDR4 a 4400MHz, con ranuras PCIe 4.0, puertos USB 3.2 y conectividad Ethernet 2.5G."
    },
    {
      "id": 97,
      "id_category": 3,
      "brand": "ASRock",
      "name": "ASRock X570 Taichi",
      "price": 349,
      "info": "Motherboard ASRock X570 Taichi con chipset X570, formato ATX, socket AM4. Soporta hasta 128GB de RAM DDR4 a 4533MHz, con ranuras PCIe 4.0 y almacenamiento M.2 PCIe 4.0."
    },
    {
      "id": 98,
      "id_category": 3,
      "brand": "ASUS",
      "name": "ASUS TUF Gaming B550-Plus",
      "price": 189,
      "info": "Motherboard ASUS TUF Gaming B550-Plus con chipset B550, formato ATX, socket AM4. Soporta hasta 128GB de RAM DDR4 a 4400MHz, con ranuras PCIe 4.0 y conectividad Ethernet 1G."
    },
    {
      "id": 99,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI MAG B550 Tomahawk",
      "price": 179,
      "info": "Motherboard MSI MAG B550 Tomahawk con chipset B550, formato ATX, socket AM4. Ofrece soporte para hasta 128GB de RAM DDR4 a 4400MHz, ranuras PCIe 4.0 y conectividad Ethernet 1G."
    },
    {
      "id": 100,
      "id_category": 3,
      "brand": "Gigabyte",
      "name": "Gigabyte B550 Aorus Pro AC",
      "price": 199,
      "info": "Motherboard Gigabyte B550 Aorus Pro AC con chipset B550, formato ATX, socket AM4. Soporta hasta 128GB de RAM DDR4 a 4600MHz, con ranuras PCIe 4.0, WiFi 5 y conectividad Ethernet 1G."
    },
    {
      "id": 101,
      "id_category": 3,
      "brand": "ASRock",
      "name": "ASRock B550 Steel Legend",
      "price": 179,
      "info": "Motherboard ASRock B550 Steel Legend con chipset B550, formato ATX, socket AM4. Soporta hasta 128GB de RAM DDR4 a 4733MHz, con ranuras PCIe 4.0 y conectividad Ethernet 1G."
    },
    {
      "id": 102,
      "id_category": 3,
      "brand": "ASUS",
      "name": "ASUS Prime A520M-A",
      "price": 89,
      "info": "Motherboard ASUS Prime A520M-A con chipset A520, formato Micro ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 4400MHz, con ranuras PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 103,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI A520M Pro",
      "price": 79,
      "info": "Motherboard MSI A520M Pro con chipset A520, formato Micro ATX, socket AM4. Ofrece soporte para hasta 64GB de RAM DDR4 a 4400MHz, PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 104,
      "id_category": 3,
      "brand": "Gigabyte",
      "name": "Gigabyte A520M Aorus Elite",
      "price": 99,
      "info": "Motherboard Gigabyte A520M Aorus Elite con chipset A520, formato Micro ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 4600MHz, con PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 105,
      "id_category": 3,
      "brand": "ASRock",
      "name": "ASRock A520M-HDV",
      "price": 89,
      "info": "Motherboard ASRock A520M-HDV con chipset A520, formato Micro ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 4400MHz, con ranuras PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 106,
      "id_category": 3,
      "brand": "ASUS",
      "name": "ASUS ROG Crosshair VII Hero",
      "price": 299,
      "info": "Motherboard ASUS ROG Crosshair VII Hero con chipset X470, formato ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 3600MHz, con ranuras PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 107,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI X470 Gaming Pro Carbon",
      "price": 229,
      "info": "Motherboard MSI X470 Gaming Pro Carbon con chipset X470, formato ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 4133MHz, con PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 108,
      "id_category": 3,
      "brand": "Gigabyte",
      "name": "Gigabyte X470 Aorus Gaming 7 WiFi",
      "price": 269,
      "info": "Motherboard Gigabyte X470 Aorus Gaming 7 WiFi con chipset X470, formato ATX, socket AM4. Ofrece soporte para hasta 64GB de RAM DDR4 a 4400MHz, con ranuras PCIe 3.0, conectividad Ethernet 1G y WiFi 5."
    },
    {
      "id": 109,
      "id_category": 3,
      "brand": "ASRock",
      "name": "ASRock X470 Taichi",
      "price": 239,
      "info": "Motherboard ASRock X470 Taichi con chipset X470, formato ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 3466MHz, con ranuras PCIe 3.0 y almacenamiento M.2 PCIe 3.0."
    },
    {
      "id": 110,
      "id_category": 3,
      "brand": "ASUS",
      "name": "ASUS ROG Strix B450-F Gaming",
      "price": 129,
      "info": "Motherboard ASUS ROG Strix B450-F Gaming con chipset B450, formato ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 3200MHz, con PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 111,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI B450 Tomahawk",
      "price": 109,
      "info": "Motherboard MSI B450 Tomahawk con chipset B450, formato ATX, socket AM4. Ofrece soporte para hasta 64GB de RAM DDR4 a 3600MHz, con ranuras PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 112,
      "id_category": 3,
      "brand": "Gigabyte",
      "name": "Gigabyte B450 Aorus Pro WiFi",
      "price": 129,
      "info": "Motherboard Gigabyte B450 Aorus Pro WiFi con chipset B450, formato ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 3200MHz, con PCIe 3.0, conectividad Ethernet 1G y WiFi 5."
    },
    {
      "id": 113,
      "id_category": 3,
      "brand": "ASRock",
      "name": "ASRock B450 Steel Legend",
      "price": 119,
      "info": "Motherboard ASRock B450 Steel Legend con chipset B450, formato ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 3533MHz, con PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 114,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI B350 Gaming Pro Carbon",
      "price": 99,
      "info": "Motherboard MSI B350 Gaming Pro Carbon con chipset B350, formato ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 3200MHz, con ranuras PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 115,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI B350 Tomahawk",
      "price": 89,
      "info": "Motherboard MSI B350 Tomahawk con chipset B350, formato ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 3200MHz, con PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 116,
      "id_category": 3,
      "brand": "Gigabyte",
      "name": "Gigabyte B350 Aorus Gaming 3",
      "price": 99,
      "info": "Motherboard Gigabyte B350 Aorus Gaming 3 con chipset B350, formato ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 3200MHz, con PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 117,
      "id_category": 3,
      "brand": "ASRock",
      "name": "ASRock B350M Pro4",
      "price": 79,
      "info": "Motherboard ASRock B350M Pro4 con chipset B350, formato Micro ATX, socket AM4. Soporta hasta 64GB de RAM DDR4 a 3200MHz, con ranuras PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 118,
      "id_category": 3,
      "brand": "ASUS",
      "name": "ASUS Prime A320M-K",
      "price": 59,
      "info": "Motherboard ASUS Prime A320M-K con chipset A320, formato Micro ATX, socket AM4. Soporta hasta 32GB de RAM DDR4 a 2666MHz, con ranuras PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 119,
      "id_category": 3,
      "brand": "MSI",
      "name": "MSI A320M Pro-VH Plus",
      "price": 59,
      "info": "Motherboard MSI A320M Pro-VH Plus con chipset A320, formato Micro ATX, socket AM4. Soporta hasta 32GB de RAM DDR4 a 2666MHz, con ranuras PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 120,
      "id_category": 3,
      "brand": "Gigabyte",
      "name": "Gigabyte GA-A320M-S2H",
      "price": 59,
      "info": "Motherboard Gigabyte GA-A320M-S2H con chipset A320, formato Micro ATX, socket AM4. Soporta hasta 32GB de RAM DDR4 a 2666MHz, con ranuras PCIe 3.0 y conectividad Ethernet 1G."
    },
    {
      "id": 121,
      "id_category": 3,
      "brand": "ASRock",
      "name": "ASRock A320M-HDV",
      "price": 59,
      "info": "Motherboard ASRock A320M-HDV con chipset A320, formato Micro ATX, socket AM4. Soporta hasta 32GB de RAM DDR4 a 2666MHz, con ranuras PCIe 3.0 y conectividad Ethernet 1G."
    },
    // Intel Motherboards:
    {
      "id": 122,
      "id_category": 4,
      "brand": "ASUS",
      "name": "ASUS ROG Strix Z790-E Gaming WiFi",
      "price": 499,
      "info": "Motherboard ASUS ROG Strix Z790-E Gaming WiFi con chipset Z790, soporte para procesadores Intel Raptor Lake Refresh. Compatible con hasta 128GB de RAM DDR5 y conectividad avanzada con WiFi 6E y Ethernet 10G."
    },
    {
      "id": 123,
      "id_category": 4,
      "brand": "MSI",
      "name": "MSI MEG Z790 ACE",
      "price": 699,
      "info": "Motherboard MSI MEG Z790 ACE con chipset Z790 para procesadores Intel Raptor Lake Refresh. Soporta RAM DDR5, múltiples ranuras PCIe 5.0 y conectividad Ethernet 10G y WiFi 6E."
    },
    {
      "id": 124,
      "id_category": 4,
      "brand": "Gigabyte",
      "name": "Gigabyte Z790 Aorus Master",
      "price": 469,
      "info": "Motherboard Gigabyte Z790 Aorus Master diseñada para Intel Raptor Lake Refresh, con soporte para RAM DDR5, PCIe 5.0 y conectividad avanzada con Ethernet 10G y WiFi 6E."
    },
    {
      "id": 125,
      "id_category": 4,
      "brand": "ASRock",
      "name": "ASRock Z790 Taichi",
      "price": 499,
      "info": "Motherboard ASRock Z790 Taichi, diseñada para procesadores Intel Raptor Lake Refresh, con soporte para RAM DDR5, PCIe 5.0, y múltiples opciones de conectividad como WiFi 6E y Ethernet 10G."
    },
    {
      "id": 126,
      "id_category": 4,
      "brand": "ASUS",
      "name": "ASUS ROG Maximus Z790 Hero",
      "price": 599,
      "info": "Motherboard ASUS ROG Maximus Z790 Hero para procesadores Intel Raptor Lake. Compatible con DDR5 y PCIe 5.0, esta placa incluye WiFi 6E y Ethernet 10G para conectividad de alta velocidad."
    },
    {
      "id": 127,
      "id_category": 4,
      "brand": "MSI",
      "name": "MSI MPG Z790 Carbon WiFi",
      "price": 399,
      "info": "Motherboard MSI MPG Z790 Carbon WiFi para procesadores Intel Raptor Lake, con soporte para DDR5 y PCIe 5.0. Conectividad WiFi 6E y Ethernet 2.5G."
    },
    {
      "id": 128,
      "id_category": 4,
      "brand": "Gigabyte",
      "name": "Gigabyte Z790 Aorus Elite AX",
      "price": 299,
      "info": "Motherboard Gigabyte Z790 Aorus Elite AX, diseñada para Intel Raptor Lake. Soporta DDR5, PCIe 5.0, con conectividad WiFi 6E y Ethernet 2.5G."
    },
    {
      "id": 129,
      "id_category": 4,
      "brand": "ASRock",
      "name": "ASRock Z790 PG Riptide",
      "price": 279,
      "info": "Motherboard ASRock Z790 PG Riptide, compatible con procesadores Intel Raptor Lake. Soporta DDR5, PCIe 5.0 y cuenta con conectividad Ethernet 2.5G."
    },
    {
      "id": 130,
      "id_category": 4,
      "brand": "ASUS",
      "name": "ASUS TUF Gaming Z690-Plus WiFi",
      "price": 229,
      "info": "Motherboard ASUS TUF Gaming Z690-Plus WiFi con chipset Z690 para procesadores Intel Alder Lake. Soporta RAM DDR5, PCIe 5.0 y conectividad WiFi 6 y Ethernet 2.5G."
    },
    {
      "id": 131,
      "id_category": 4,
      "brand": "MSI",
      "name": "MSI MAG Z690 Tomahawk WiFi",
      "price": 249,
      "info": "Motherboard MSI MAG Z690 Tomahawk WiFi con chipset Z690 para Intel Alder Lake. Soporta DDR5 y PCIe 5.0, conectividad avanzada con WiFi 6 y Ethernet 2.5G."
    },
    {
      "id": 132,
      "id_category": 4,
      "brand": "Gigabyte",
      "name": "Gigabyte Z690 Aorus Pro",
      "price": 299,
      "info": "Motherboard Gigabyte Z690 Aorus Pro diseñada para Intel Alder Lake, con soporte para RAM DDR5, PCIe 5.0, y conectividad Ethernet 2.5G y WiFi 6."
    },
    {
      "id": 133,
      "id_category": 4,
      "brand": "ASRock",
      "name": "ASRock Z690 Phantom Gaming 4",
      "price": 179,
      "info": "Motherboard ASRock Z690 Phantom Gaming 4 para procesadores Intel Alder Lake. Soporta RAM DDR5 y PCIe 4.0, con conectividad Ethernet 2.5G."
    },
    {
      "id": 134,
      "id_category": 4,
      "brand": "ASUS",
      "name": "ASUS ROG Strix Z590-E Gaming WiFi",
      "price": 389,
      "info": "Motherboard ASUS ROG Strix Z590-E Gaming WiFi con chipset Z590 para procesadores Intel Rocket Lake. Soporta DDR4, PCIe 4.0 y cuenta con conectividad WiFi 6E y Ethernet 2.5G."
    },
    {
      "id": 135,
      "id_category": 4,
      "brand": "MSI",
      "name": "MSI MPG Z590 Gaming Carbon WiFi",
      "price": 349,
      "info": "Motherboard MSI MPG Z590 Gaming Carbon WiFi para Intel Rocket Lake, con soporte para DDR4 y PCIe 4.0. Conectividad avanzada con WiFi 6E y Ethernet 2.5G."
    },
    {
      "id": 136,
      "id_category": 4,
      "brand": "Gigabyte",
      "name": "Gigabyte Z590 Aorus Master",
      "price": 429,
      "info": "Motherboard Gigabyte Z590 Aorus Master diseñada para Intel Rocket Lake. Soporta DDR4, PCIe 4.0, con conectividad Ethernet 10G y WiFi 6."
    },
    {
      "id": 137,
      "id_category": 4,
      "brand": "ASRock",
      "name": "ASRock Z590 Taichi",
      "price": 399,
      "info": "Motherboard ASRock Z590 Taichi para procesadores Intel Rocket Lake. Soporta DDR4, PCIe 4.0, y cuenta con conectividad WiFi 6E y Ethernet 2.5G."
    },
    {
      "id": 138,
      "id_category": 4,
      "brand": "ASUS",
      "name": "ASUS Prime Z490-A",
      "price": 259,
      "info": "Motherboard ASUS Prime Z490-A con chipset Z490, compatible con procesadores Intel Comet Lake. Soporta RAM DDR4 y PCIe 3.0, con conectividad Ethernet 2.5G."
    },
    {
      "id": 139,
      "id_category": 4,
      "brand": "MSI",
      "name": "MSI MEG Z490 Unify",
      "price": 369,
      "info": "Motherboard MSI MEG Z490 Unify, diseñada para procesadores Intel Comet Lake. Soporta DDR4 y PCIe 3.0, con conectividad Ethernet 2.5G."
    },
    {
      "id": 140,
      "id_category": 4,
      "brand": "Gigabyte",
      "name": "Gigabyte Z490 Aorus Ultra",
      "price": 329,
      "info": "Motherboard Gigabyte Z490 Aorus Ultra para procesadores Intel Comet Lake, con soporte para DDR4 y PCIe 3.0. Conectividad Ethernet 2.5G y WiFi 6."
    },
    {
      "id": 141,
      "id_category": 4,
      "brand": "ASRock",
      "name": "ASRock Z490 Phantom Gaming 4",
      "price": 199,
      "info": "Motherboard ASRock Z490 Phantom Gaming 4 con chipset Z490 para Intel Comet Lake. Soporta DDR4 y PCIe 3.0, con conectividad Ethernet 2.5G."
    },
    {
      "id": 142,
      "id_category": 4,
      "brand": "ASUS",
      "name": "ASUS ROG Maximus XI Hero (WiFi)",
      "price": 399,
      "info": "Motherboard ASUS ROG Maximus XI Hero (WiFi) con chipset Z390 para procesadores Intel Coffee Lake Refresh. Soporta DDR4, PCIe 3.0 y cuenta con conectividad WiFi 6 y Ethernet 2.5G."
    },
    {
      "id": 143,
      "id_category": 4,
      "brand": "MSI",
      "name": "MSI MPG Z390 Gaming Edge AC",
      "price": 289,
      "info": "Motherboard MSI MPG Z390 Gaming Edge AC para procesadores Intel Coffee Lake Refresh. Soporta DDR4 y PCIe 3.0, con conectividad WiFi 6 y Ethernet 2.5G."
    },
    {
      "id": 144,
      "id_category": 4,
      "brand": "Gigabyte",
      "name": "Gigabyte Z390 Aorus Ultra",
      "price": 329,
      "info": "Motherboard Gigabyte Z390 Aorus Ultra para procesadores Intel Coffee Lake Refresh, con soporte para DDR4 y PCIe 3.0. Conectividad Ethernet 2.5G y WiFi 6."
    },
    {
      "id": 145,
      "id_category": 4,
      "brand": "ASRock",
      "name": "ASRock Z390 Phantom Gaming 6",
      "price": 239,
      "info": "Motherboard ASRock Z390 Phantom Gaming 6 con chipset Z390 para Intel Coffee Lake Refresh. Soporta DDR4 y PCIe 3.0, con conectividad Ethernet 2.5G y WiFi 6."
    },
    {
      "id": 146,
      "id_category": 4,
      "brand": "ASUS",
      "name": "ASUS Prime Z370-A",
      "price": 199,
      "info": "Motherboard ASUS Prime Z370-A con chipset Z370 para procesadores Intel Coffee Lake. Soporta DDR4 y PCIe 3.0, con conectividad Ethernet 1G."
    },
    {
      "id": 147,
      "id_category": 4,
      "brand": "MSI",
      "name": "MSI Z370 Gaming Pro Carbon",
      "price": 219,
      "info": "Motherboard MSI Z370 Gaming Pro Carbon para procesadores Intel Coffee Lake. Soporta DDR4 y PCIe 3.0, con conectividad Ethernet 1G y soporte para WiFi opcional."
    },
    {
      "id": 148,
      "id_category": 4,
      "brand": "Gigabyte",
      "name": "Gigabyte Z370 Aorus Gaming 5",
      "price": 249,
      "info": "Motherboard Gigabyte Z370 Aorus Gaming 5 para procesadores Intel Coffee Lake. Soporta DDR4 y PCIe 3.0, con conectividad Ethernet 1G y soporte para WiFi opcional."
    },
    {
      "id": 149,
      "id_category": 4,
      "brand": "ASRock",
      "name": "ASRock Z370 Extreme4",
      "price": 229,
      "info": "Motherboard ASRock Z370 Extreme4 para procesadores Intel Coffee Lake. Soporta DDR4 y PCIe 3.0, con conectividad Ethernet 1G y soporte para WiFi opcional."
    },
    // Otra categoria:





  ]
  private category = [
    {
      "id": 1,
      "name": "cpuAmd",
    },
    {
      "id": 2,
      "name": "cpuIntel",
    },
    {
      "id": 3,
      "name": "motherAmd",
    },
    {
      "id": 4,
      "name": "motherIntel",
    },
    {
      "id": 5,
      "name": "gpuNvidia",
    },
    {
      "id": 6,
      "name": "gpuAmd",
    },
    {
      "id": 7,
      "name": "ramDdr4",
    },
    {
      "id": 8,
      "name": "ramDdr5",
    },
    {
      "id": 9,
      "name": "ssd",
    },
    {
      "id": 10,
      "name": "hdd",
    },
    {
      "id": 11,
      "name": "psu",
    },
    {
      "id": 12,
      "name": "coolingAio",
    },
    {
      "id": 13,
      "name": "coolingAir",
    },
    {
      "id": 14,
      "name": "case",
    }
  ]

// Methods
  filter(filterDto: FilterDto) {
    const { id, id_category, brand } = filterDto;
    if (id_category) {
      return this.product.filter(product => product.id_category === Number(id_category));
    }
    if (id) {
      return this.product.find(product => product.id === Number(id));
    }
    if (brand) {
      return this.product.filter(product => product.brand === brand);
    }
  }
  search(filterDto: FilterDto) {
    const { name } = filterDto;
    return this.product.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
  }
  sort(filterDto: FilterDto) {
    const { id_category, sort } = filterDto;
    let result = [];
    result = this.product.filter(product => product.id_category === Number(id_category));
    if (sort === "asc") {
      return result.sort((a, b) => a.price - b.price);
    }
    if (sort === "desc") {
      return result.sort((a, b) => b.price - a.price);
    }
  }
}