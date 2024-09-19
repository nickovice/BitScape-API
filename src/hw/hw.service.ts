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
    // GPUS Nvidia:
    {
      "id": 150,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia GT 1030",
      "price": 79,
      "info": "Lanzada en 2017, con 2 GB de VRAM GDDR5 y 384 núcleos CUDA, la GT 1030 es ideal para tareas básicas y juegos ligeros a 720p. Tiene una frecuencia base de 1227 MHz (boost a 1468 MHz) y un TDP de 30 W, sin necesidad de conector de energía adicional. Ofrece 1x HDMI y 1x DisplayPort."
    },
    {
      "id": 151,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia GTX 1050",
      "price": 109,
      "info": "Lanzada en 2016, con 2 GB GDDR5 y 640 núcleos CUDA, la GTX 1050 está diseñada para gaming en 1080p en configuraciones bajas-medias. Su frecuencia base es de 1354 MHz (boost a 1455 MHz) y tiene un TDP de 75 W, sin necesidad de conector adicional. Salidas: 1x HDMI, 1x DisplayPort, 1x DVI-D."
    },
    {
      "id": 152,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia GTX 1050 Ti",
      "price": 139,
      "info": "Lanzada en 2016, con 4 GB GDDR5 y 768 núcleos CUDA, la GTX 1050 Ti es ideal para gaming en 1080p en configuraciones medias. Tiene una frecuencia base de 1290 MHz (boost a 1392 MHz) y un TDP de 75 W, sin necesidad de conector adicional. Ofrece salidas 1x HDMI, 1x DisplayPort, y 1x DVI-D."
    },
    {
      "id": 153,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia GTX 1060",
      "price": 249,
      "info": "Lanzada en 2016, con 6 GB GDDR5 y 1280 núcleos CUDA, la GTX 1060 está diseñada para gaming en 1080p con buen rendimiento en configuraciones medias-altas. Tiene una frecuencia base de 1506 MHz (boost a 1708 MHz) y un TDP de 120 W, con conector de 6 pines. Ofrece salidas 1x HDMI, 3x DisplayPort, y 1x DVI-D. No soporta Ray Tracing ni DLSS, pero es excelente para juegos y realidad virtual."
    },
    {
      "id": 154,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia GTX 1070",
      "price": 379,
      "info": "Lanzada en 2016, con 8 GB GDDR5 y 1920 núcleos CUDA, la GTX 1070 es ideal para gaming en 1440p en configuraciones medias. Tiene una frecuencia base de 1506 MHz (boost a 1683 MHz) y un TDP de 150 W, con conector de 8 pines. Salidas: 1x HDMI, 3x DisplayPort, y 1x DVI-D."
    },
    {
      "id": 155,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia GTX 1070 Ti",
      "price": 449,
      "info": "Lanzada en 2017, con 8 GB GDDR5 y 2432 núcleos CUDA, la GTX 1070 Ti es ideal para gaming en 1440p en configuraciones medias-altas. Tiene una frecuencia base de 1607 MHz (boost a 1683 MHz) y un TDP de 180 W, con conector de 8 pines. Salidas: 1x HDMI, 3x DisplayPort, y 1x DVI-D."
    },
    {
      "id": 156,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia GTX 1080",
      "price": 599,
      "info": "Lanzada en 2016, con 8 GB GDDR5X y 2560 núcleos CUDA, la GTX 1080 es ideal para gaming en 1440p en configuraciones altas. Su frecuencia base es de 1607 MHz (boost a 1733 MHz) y tiene un TDP de 180 W, con conector de 8 pines. Ofrece salidas 1x HDMI, 3x DisplayPort, y 1x DVI-D."
    },
    {
      "id": 157,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia GTX 1080 Ti",
      "price": 699,
      "info": "Lanzada en 2017, con 11 GB GDDR5X y 3584 núcleos CUDA, la GTX 1080 Ti está diseñada para gaming en 1440p y 4K. Tiene una frecuencia base de 1480 MHz (boost a 1582 MHz) y un TDP de 250 W, con conectores de 8+6 pines. Salidas: 1x HDMI, 3x DisplayPort, y 1x DVI-D."
    },
    {
      "id": 158,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 2060",
      "price": 349,
      "info": "Lanzada en 2019, con 6 GB GDDR6 y 1920 núcleos CUDA, la RTX 2060 está diseñada para gaming en 1080p con Ray Tracing en configuraciones medias. Tiene una frecuencia base de 1365 MHz (boost a 1680 MHz) y un TDP de 160 W, con conector de 8 pines. Ofrece salidas 1x HDMI, 1x DisplayPort, y 1x USB-C."
    },
    {
      "id": 159,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 2060 Super",
      "price": 399,
      "info": "Lanzada en 2019, con 8 GB GDDR6 y 2176 núcleos CUDA, la RTX 2060 Super es ideal para gaming en 1440p en configuraciones medias. Tiene una frecuencia base de 1470 MHz (boost a 1650 MHz) y un TDP de 175 W, con conector de 8 pines. Salidas: 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 160,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 2070",
      "price": 499,
      "info": "Lanzada en 2018, con 8 GB GDDR6 y 2304 núcleos CUDA, la RTX 2070 está diseñada para gaming en 1440p con Ray Tracing en configuraciones medias-altas. Tiene una frecuencia base de 1410 MHz (boost a 1620 MHz) y un TDP de 175 W, con conector de 8 pines. Ofrece salidas 1x HDMI, 1x DisplayPort, y 1x USB-C."
    },
    {
      "id": 161,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 2070 Super",
      "price": 549,
      "info": "Lanzada en 2019, con 8 GB GDDR6 y 2560 núcleos CUDA, la RTX 2070 Super es ideal para gaming en 1440p/4K. Tiene una frecuencia base de 1605 MHz (boost a 1770 MHz) y un TDP de 215 W, con conector de 8 pines. Salidas: 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 162,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 2080",
      "price": 699,
      "info": "Lanzada en 2018, con 8 GB GDDR6 y 2944 núcleos CUDA, la RTX 2080 está diseñada para gaming en 1440p/4K con Ray Tracing en configuraciones altas. Tiene una frecuencia base de 1515 MHz (boost a 1710 MHz) y un TDP de 215 W, con conector de 8 pines. Ofrece salidas 1x HDMI, 3x DisplayPort, y 1x USB-C."
    },
    {
      "id": 163,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 2080 Super",
      "price": 749,
      "info": "Lanzada en 2019, con 8 GB GDDR6 y 3072 núcleos CUDA, la RTX 2080 Super es ideal para gaming en 4K con Ray Tracing en configuraciones altas. Tiene una frecuencia base de 1657 MHz (boost a 1815 MHz) y un TDP de 250 W, con conector de 8 pines. Salidas: 1x HDMI, 3x DisplayPort, y 1x USB-C."
    },
    {
      "id": 164,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 2080 Ti",
      "price": 1199,
      "info": "Lanzada en 2018, con 11 GB GDDR6 y 4352 núcleos CUDA, la RTX 2080 Ti está diseñada para gaming en 4K con Ray Tracing en configuraciones ultra. Tiene una frecuencia base de 1350 MHz (boost a 1545 MHz) y un TDP de 250 W, con conectores de 8+6 pines. Salidas: 1x HDMI, 3x DisplayPort, y 1x USB-C."
    },
    {
      "id": 165,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 3060",
      "price": 329,
      "info": "Lanzada en 2021, con 12 GB GDDR6 y 3584 núcleos CUDA, la RTX 3060 está diseñada para gaming en 1080p/1440p con Ray Tracing. Tiene una frecuencia base de 1320 MHz (boost a 1777 MHz) y un TDP de 170 W, con conector de 8 pines. Ofrece salidas 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 166,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 3060 Ti",
      "price": 399,
      "info": "Lanzada en 2020, con 8 GB GDDR6 y 4864 núcleos CUDA, la RTX 3060 Ti es ideal para gaming en 1440p/4K con Ray Tracing en configuraciones medias-altas. Tiene una frecuencia base de 1410 MHz (boost a 1665 MHz) y un TDP de 200 W, con conector de 8 pines. Salidas: 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 167,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 3070",
      "price": 499,
      "info": "Lanzada en 2020, con 8 GB GDDR6 y 5888 núcleos CUDA, la RTX 3070 está diseñada para gaming en 1440p/4K con Ray Tracing en configuraciones altas. Tiene una frecuencia base de 1500 MHz (boost a 1725 MHz) y un TDP de 220 W, con conector de 8 pines. Ofrece salidas 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 168,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 3070 Ti",
      "price": 619,
      "info": "Lanzada en 2021, con 8 GB GDDR6X y 6144 núcleos CUDA, la RTX 3070 Ti es ideal para gaming en 4K con Ray Tracing en configuraciones altas. Tiene una frecuencia base de 1575 MHz (boost a 1770 MHz) y un TDP de 290 W, con conector de 8 pines. Salidas: 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 169,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 3080",
      "price": 699,
      "info": "Lanzada en 2020, con 10 GB GDDR6X y 8704 núcleos CUDA, la RTX 3080 está diseñada para gaming en 4K con Ray Tracing en configuraciones ultra. Tiene una frecuencia base de 1440 MHz (boost a 1710 MHz) y un TDP de 320 W, con conector de 8+8 pines. Ofrece salidas 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 170,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 3080 Ti",
      "price": 1199,
      "info": "Lanzada en 2021, con 12 GB GDDR6X y 10240 núcleos CUDA, la RTX 3080 Ti es ideal para gaming en 4K con Ray Tracing en configuraciones ultra. Tiene una frecuencia base de 1365 MHz (boost a 1665 MHz) y un TDP de 350 W, con conector de 8+8 pines. Salidas: 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 171,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 3090",
      "price": 1499,
      "info": "Lanzada en 2020, con 24 GB GDDR6X y 10496 núcleos CUDA, la RTX 3090 está diseñada para gaming en 4K y tareas intensivas como la edición de video y modelado 3D. Tiene una frecuencia base de 1395 MHz (boost a 1695 MHz) y un TDP de 350 W, con conectores de 8+8 pines. Ofrece salidas 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 172,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 4060",
      "price": 299,
      "info": "Lanzada en 2023, con 8 GB GDDR6 y 3072 núcleos CUDA, la RTX 4060 es ideal para gaming en 1080p con Ray Tracing. Tiene una frecuencia base de 1350 MHz (boost a 2370 MHz) y un TDP de 115 W, con conector de 8 pines. Salidas: 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 173,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 4070",
      "price": 599,
      "info": "Lanzada en 2023, con 12 GB GDDR6X y 5888 núcleos CUDA, la RTX 4070 está diseñada para gaming en 1440p/4K con Ray Tracing en configuraciones medias-altas. Tiene una frecuencia base de 1920 MHz (boost a 2475 MHz) y un TDP de 200 W, con conector de 8 pines. Salidas: 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 174,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 4080",
      "price": 1199,
      "info": "Lanzada en 2022, con 16 GB GDDR6X y 9728 núcleos CUDA, la RTX 4080 está diseñada para gaming en 4K con Ray Tracing en configuraciones ultra. Tiene una frecuencia base de 2205 MHz (boost a 2610 MHz) y un TDP de 320 W, con conector de 8+8 pines. Ofrece salidas 1x HDMI, 3x DisplayPort."
    },
    {
      "id": 175,
      "id_category": 5,
      "brand": "Nvidia",
      "name": "Nvidia RTX 4090",
      "price": 1599,
      "info": "Lanzada en 2022, con 24 GB GDDR6X y 16384 núcleos CUDA, la RTX 4090 está diseñada para gaming en 4K y aplicaciones profesionales. Tiene una frecuencia base de 2235 MHz (boost a 2520 MHz) y un TDP de 450 W, con conectores de 16 pines. Salidas: 1x HDMI, 3x DisplayPort."
    },
    //GPUS AMD:
    {
      "id": 176,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 550",
      "price": 109,
      "info": "Lanzada en 2017, con 2 GB GDDR5 y 512 Stream Processors, la RX 550 es adecuada para tareas básicas y gaming ligero en 720p. Tiene una frecuencia base de 1100 MHz (boost a 1183 MHz) y un TDP de 50 W, sin necesidad de conector adicional. Ofrece 1x HDMI, 1x DisplayPort, y 1x DVI-D."
    },
    {
      "id": 177,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 560",
      "price": 149,
      "info": "Lanzada en 2017, con 4 GB GDDR5 y 1024 Stream Processors, la RX 560 está diseñada para gaming en 1080p en configuraciones bajas-medias. Tiene una frecuencia base de 1175 MHz (boost a 1275 MHz) y un TDP de 80 W, sin necesidad de conector adicional. Salidas: 1x HDMI, 1x DisplayPort, y 1x DVI-D."
    },
    {
      "id": 178,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 570",
      "price": 179,
      "info": "Lanzada en 2017, con 4 GB GDDR5 y 2048 Stream Processors, la RX 570 es ideal para gaming en 1080p en configuraciones medias-altas. Tiene una frecuencia base de 1168 MHz (boost a 1244 MHz) y un TDP de 150 W, con conector de 6 pines. Ofrece 1x HDMI, 1x DisplayPort, y 1x DVI-D."
    },
    {
      "id": 179,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 580",
      "price": 229,
      "info": "Lanzada en 2017, con 8 GB GDDR5 y 2304 Stream Processors, la RX 580 está diseñada para gaming en 1080p en configuraciones altas. Tiene una frecuencia base de 1257 MHz (boost a 1340 MHz) y un TDP de 185 W, con conector de 6 pines. Salidas: 1x HDMI, 3x DisplayPort, y 1x DVI-D."
    },
    {
      "id": 180,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 590",
      "price": 249,
      "info": "Lanzada en 2018, con 8 GB GDDR5 y 2304 Stream Processors, la RX 590 es ideal para gaming en 1080p con configuraciones altas. Tiene una frecuencia base de 1469 MHz (boost a 1545 MHz) y un TDP de 225 W, con conector de 8 pines. Ofrece 1x HDMI, 3x DisplayPort, y 1x DVI-D."
    },
    {
      "id": 181,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 5600 XT",
      "price": 279,
      "info": "Lanzada en 2020, con 6 GB GDDR6 y 2304 Stream Processors, la RX 5600 XT es ideal para gaming en 1080p con configuraciones medias-altas. Tiene una frecuencia base de 1130 MHz (boost a 1560 MHz) y un TDP de 150 W, con conector de 8 pines. Ofrece 1x HDMI y 3x DisplayPort."
    },
    {
      "id": 182,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 5700",
      "price": 399,
      "info": "Lanzada en 2019, con 8 GB GDDR6 y 2304 Stream Processors, la RX 5700 está diseñada para gaming en 1440p en configuraciones altas. Tiene una frecuencia base de 1465 MHz (boost a 1725 MHz) y un TDP de 180 W, con conector de 8 pines. Ofrece 1x HDMI y 3x DisplayPort."
    },
    {
      "id": 183,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 5700 XT",
      "price": 449,
      "info": "Lanzada en 2019, con 8 GB GDDR6 y 2560 Stream Processors, la RX 5700 XT es ideal para gaming en 1440p con configuraciones altas. Tiene una frecuencia base de 1605 MHz (boost a 1905 MHz) y un TDP de 225 W, con conector de 8 pines. Ofrece 1x HDMI y 3x DisplayPort."
    },
    {
      "id": 184,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 6800",
      "price": 579,
      "info": "Lanzada en 2020, con 16 GB GDDR6 y 3840 Stream Processors, la RX 6800 está diseñada para gaming en 1440p/4K en configuraciones altas. Tiene una frecuencia base de 1700 MHz (boost a 2105 MHz) y un TDP de 250 W, con conector de 8+6 pines. Ofrece 1x HDMI y 3x DisplayPort."
    },
    {
      "id": 185,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 6800 XT",
      "price": 649,
      "info": "Lanzada en 2020, con 16 GB GDDR6 y 4608 Stream Processors, la RX 6800 XT es ideal para gaming en 4K con configuraciones altas. Tiene una frecuencia base de 1800 MHz (boost a 2250 MHz) y un TDP de 300 W, con conector de 8+6 pines. Ofrece 1x HDMI y 3x DisplayPort."
    },
    {
      "id": 186,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 6900 XT",
      "price": 999,
      "info": "Lanzada en 2020, con 16 GB GDDR6 y 5120 Stream Processors, la RX 6900 XT está diseñada para gaming en 4K con configuraciones ultra. Tiene una frecuencia base de 1825 MHz (boost a 2250 MHz) y un TDP de 300 W, con conector de 8+6 pines. Ofrece 1x HDMI y 3x DisplayPort."
    },
    {
      "id": 187,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 7600",
      "price": 299,
      "info": "Lanzada en 2023, con 8 GB GDDR6 y 2048 Stream Processors, la RX 7600 está diseñada para gaming en 1080p con configuraciones medias-altas. Tiene una frecuencia base de 1320 MHz (boost a 2320 MHz) y un TDP de 165 W, con conector de 8 pines. Ofrece 1x HDMI y 3x DisplayPort."
    },
    {
      "id": 188,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 7700 XT",
      "price": 449,
      "info": "Lanzada en 2023, con 12 GB GDDR6 y 3072 Stream Processors, la RX 7700 XT es ideal para gaming en 1440p/4K con configuraciones medias-altas. Tiene una frecuencia base de 2050 MHz (boost a 2450 MHz) y un TDP de 250 W, con conector de 8 pines. Ofrece 1x HDMI y 3x DisplayPort."
    },
    {
      "id": 189,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 7800 XT",
      "price": 599,
      "info": "Lanzada en 2023, con 16 GB GDDR6 y 3840 Stream Processors, la RX 7800 XT está diseñada para gaming en 4K con configuraciones altas. Tiene una frecuencia base de 2100 MHz (boost a 2500 MHz) y un TDP de 300 W, con conector de 8+8 pines. Ofrece 1x HDMI y 3x DisplayPort."
    },
    {
      "id": 190,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 7900 XT",
      "price": 999,
      "info": "Lanzada en 2022, con 20 GB GDDR6 y 5376 Stream Processors, la RX 7900 XT está diseñada para gaming en 4K con configuraciones ultra. Tiene una frecuencia base de 2000 MHz (boost a 2500 MHz) y un TDP de 300 W, con conector de 8+8 pines. Ofrece 1x HDMI y 3x DisplayPort."
    },
    {
      "id": 191,
      "id_category": 6,
      "brand": "AMD",
      "name": "AMD RX 7900 XTX",
      "price": 1199,
      "info": "Lanzada en 2022, con 24 GB GDDR6 y 6144 Stream Processors, la RX 7900 XTX está diseñada para gaming en 4K con configuraciones ultra y aplicaciones profesionales. Tiene una frecuencia base de 2300 MHz (boost a 2600 MHz) y un TDP de 355 W, con conector de 8+8 pines. Ofrece 1x HDMI y 3x DisplayPort."
    },
    // Ram DDR4:
    {
      "id": 192,
      "id_category": 7,
      "brand": "Corsair",
      "name": "Corsair Vengeance LPX 4 GB",
      "price": 29,
      "info": "Lanzada en 2017, la Corsair Vengeance LPX de 4 GB DDR4 está diseñada para sistemas básicos y gaming ligero. Funciona a una velocidad de 2400 MHz con latencia CL16 y un voltaje de 1.2 V. Tiene un diseño de perfil bajo para encajar en espacios reducidos y un disipador de calor de aluminio."
    },
    {
      "id": 193,
      "id_category": 7,
      "brand": "G.Skill",
      "name": "G.Skill Ripjaws V 8 GB",
      "price": 49,
      "info": "Lanzada en 2018, la G.Skill Ripjaws V de 8 GB DDR4 está ideal para gaming y tareas multitarea. Funciona a una velocidad de 3200 MHz con latencia CL16 y un voltaje de 1.35 V. Tiene un disipador de calor de aluminio para un mejor rendimiento térmico."
    },
    {
      "id": 194,
      "id_category": 7,
      "brand": "Kingston",
      "name": "Kingston HyperX Fury 8 GB",
      "price": 55,
      "info": "Lanzada en 2018, la Kingston HyperX Fury de 8 GB DDR4 es adecuada para gaming y aplicaciones multitarea. Funciona a una velocidad de 2666 MHz con latencia CL16 y un voltaje de 1.2 V. Incluye un disipador de calor de perfil bajo para una mejor instalación."
    },
    {
      "id": 195,
      "id_category": 7,
      "brand": "Crucial",
      "name": "Crucial Ballistix 16 GB",
      "price": 95,
      "info": "Lanzada en 2020, la Crucial Ballistix de 16 GB DDR4 es ideal para gaming y edición de video. Funciona a una velocidad de 3600 MHz con latencia CL16 y un voltaje de 1.35 V. Presenta un disipador de calor estilizado para mejorar la disipación térmica."
    },
    {
      "id": 196,
      "id_category": 7,
      "brand": "Corsair",
      "name": "Corsair Vengeance LPX 16 GB",
      "price": 89,
      "info": "Lanzada en 2019, la Corsair Vengeance LPX de 16 GB DDR4 está diseñada para gaming avanzado y multitarea. Funciona a una velocidad de 3200 MHz con latencia CL16 y un voltaje de 1.35 V. Tiene un disipador de calor de aluminio para una refrigeración eficiente."
    },
    {
      "id": 197,
      "id_category": 7,
      "brand": "G.Skill",
      "name": "G.Skill Trident Z RGB 32 GB",
      "price": 239,
      "info": "Lanzada en 2021, la G.Skill Trident Z RGB de 32 GB DDR4 ofrece un alto rendimiento para gaming y tareas profesionales. Funciona a una velocidad de 3600 MHz con latencia CL16 y un voltaje de 1.35 V. Incluye iluminación RGB personalizable y un disipador de calor de alto rendimiento."
    },
    {
      "id": 198,
      "id_category": 7,
      "brand": "HyperX",
      "name": "HyperX Predator 32 GB",
      "price": 259,
      "info": "Lanzada en 2022, la HyperX Predator de 32 GB DDR4 está diseñada para entusiastas del gaming y overclockers. Funciona a una velocidad de 4000 MHz con latencia CL19 y un voltaje de 1.35 V. Incluye un disipador de calor robusto para soportar overclocking extremo."
    },
    {
      "id": 199,
      "id_category": 7,
      "brand": "Team",
      "name": "Team T-Force Delta RGB 32 GB",
      "price": 219,
      "info": "Lanzada en 2021, la Team T-Force Delta RGB de 32 GB DDR4 es ideal para gaming y estaciones de trabajo. Funciona a una velocidad de 3600 MHz con latencia CL18 y un voltaje de 1.35 V. Incluye iluminación RGB personalizable y un disipador de calor de alto rendimiento."
    },
    {
      "id": 200,
      "id_category": 7,
      "brand": "Corsair",
      "name": "Corsair Vengeance LPX 64 GB",
      "price": 399,
      "info": "Lanzada en 2022, la Corsair Vengeance LPX de 64 GB DDR4 está diseñada para estaciones de trabajo y aplicaciones de alto rendimiento. Funciona a una velocidad de 3200 MHz con latencia CL16 y un voltaje de 1.35 V. Su diseño de perfil bajo permite una fácil instalación en sistemas con restricciones de espacio, y su disipador de calor de aluminio asegura una óptima refrigeración."
    },
    //RAM DDR5:
    {
      "id": 201,
      "id_category": 8,
      "brand": "Corsair",
      "name": "Corsair Vengeance DDR5 16 GB",
      "price": 149,
      "info": "Lanzada en 2022, la Corsair Vengeance DDR5 de 16 GB está diseñada para sistemas de alto rendimiento y gaming. Funciona a una velocidad de 4800 MHz con latencia CL40 y un voltaje de 1.1 V. Incluye un disipador de calor estilizado para mantener la estabilidad en overclocking."
    },
    {
      "id": 202,
      "id_category": 8,
      "brand": "G.Skill",
      "name": "G.Skill Trident Z5 RGB 16 GB",
      "price": 179,
      "info": "Lanzada en 2022, la G.Skill Trident Z5 RGB de 16 GB DDR5 ofrece alto rendimiento y estética con iluminación RGB. Funciona a una velocidad de 6000 MHz con latencia CL36 y un voltaje de 1.35 V. Ideal para gaming extremo y aplicaciones profesionales."
    },
    {
      "id": 203,
      "id_category": 8,
      "brand": "Kingston",
      "name": "Kingston Fury Renegade 32 GB",
      "price": 289,
      "info": "Lanzada en 2023, la Kingston Fury Renegade de 32 GB DDR5 está diseñada para entusiastas del gaming y profesionales. Funciona a una velocidad de 6400 MHz con latencia CL32 y un voltaje de 1.4 V. Tiene un disipador de calor de alto rendimiento y diseño agresivo para overclocking."
    },
    {
      "id": 204,
      "id_category": 8,
      "brand": "Crucial",
      "name": "Crucial Ballistix Max 32 GB",
      "price": 299,
      "info": "Lanzada en 2023, la Crucial Ballistix Max de 32 GB DDR5 está diseñada para sistemas de alto rendimiento y estaciones de trabajo. Funciona a una velocidad de 6000 MHz con latencia CL40 y un voltaje de 1.35 V. Incluye un disipador de calor robusto para mantener la estabilidad en configuraciones exigentes."
    },
    {
      "id": 205,
      "id_category": 8,
      "brand": "Corsair",
      "name": "Corsair Vengeance DDR5 64 GB",
      "price": 549,
      "info": "Lanzada en 2023, la Corsair Vengeance DDR5 de 64 GB está diseñada para aplicaciones profesionales y estaciones de trabajo avanzadas. Funciona a una velocidad de 5600 MHz con latencia CL36 y un voltaje de 1.35 V. Su disipador de calor de aluminio asegura una óptima refrigeración y estabilidad en uso intensivo."
    },
    {
      "id": 206,
      "id_category": 8,
      "brand": "G.Skill",
      "name": "G.Skill Ripjaws S5 64 GB",
      "price": 499,
      "info": "Lanzada en 2023, la G.Skill Ripjaws S5 de 64 GB DDR5 está diseñada para entusiastas y profesionales que requieren gran capacidad y velocidad. Funciona a una velocidad de 6000 MHz con latencia CL40 y un voltaje de 1.35 V. Tiene un diseño eficiente para la disipación de calor y estabilidad en overclocking."
    },
    {
      "id": 207,
      "id_category": 8,
      "brand": "ADATA",
      "name": "ADATA XPG Caster 16 GB",
      "price": 169,
      "info": "Lanzada en 2022, la ADATA XPG Caster de 16 GB DDR5 está diseñada para ofrecer rendimiento y estabilidad en gaming. Funciona a una velocidad de 5600 MHz con latencia CL38 y un voltaje de 1.35 V. Incluye un diseño de disipador de calor para mantener la eficiencia durante largas sesiones de uso."
    },
    {
      "id": 208,
      "id_category": 8,
      "brand": "Team",
      "name": "Team T-Force Vulcan Z 32 GB",
      "price": 259,
      "info": "Lanzada en 2023, la Team T-Force Vulcan Z de 32 GB DDR5 es ideal para gamers y creadores de contenido. Funciona a una velocidad de 6000 MHz con latencia CL40 y un voltaje de 1.35 V. Su diseño incluye un disipador de calor para asegurar una alta estabilidad y rendimiento."
    },
    {
      "id": 209,
      "id_category": 8,
      "brand": "Patriot",
      "name": "Patriot Viper Steel 32 GB",
      "price": 279,
      "info": "Lanzada en 2023, la Patriot Viper Steel de 32 GB DDR5 está diseñada para proporcionar alto rendimiento en sistemas de gaming y trabajo profesional. Funciona a una velocidad de 6200 MHz con latencia CL40 y un voltaje de 1.35 V. Incluye un diseño robusto y un eficiente disipador de calor."
    },
    {
      "id": 210,
      "id_category": 8,
      "brand": "Corsair",
      "name": "Corsair Dominator Platinum 64 GB",
      "price": 699,
      "info": "Lanzada en 2023, la Corsair Dominator Platinum de 64 GB DDR5 está diseñada para entusiastas y profesionales que requieren el mejor rendimiento. Funciona a una velocidad de 6400 MHz con latencia CL32 y un voltaje de 1.4 V. Incluye iluminación RGB personalizable y un disipador de calor avanzado para mantener la estabilidad en condiciones extremas."
    },
    // SSDs:
    {
      "id": 211,
      "id_category": 9,
      "brand": "Samsung",
      "name": "Samsung 860 EVO 120 GB",
      "price": 59,
      "info": "Lanzado en 2018, el Samsung 860 EVO de 120 GB es un SSD SATA con tecnología V-NAND y una velocidad de lectura de hasta 550 MB/s y escritura de 520 MB/s. Es ideal para usuarios que desean mejorar el rendimiento de sus sistemas con una capacidad básica."
    },
    {
      "id": 212,
      "id_category": 9,
      "brand": "Crucial",
      "name": "Crucial MX500 250 GB",
      "price": 79,
      "info": "Lanzado en 2018, el Crucial MX500 de 250 GB es un SSD SATA con tecnología 3D NAND y una velocidad de lectura de hasta 560 MB/s y escritura de 510 MB/s. Ofrece un equilibrio entre rendimiento y capacidad, ideal para una actualización de sistema accesible."
    },
    {
      "id": 213,
      "id_category": 9,
      "brand": "WD",
      "name": "WD Blue SN550 250 GB",
      "price": 89,
      "info": "Lanzado en 2020, el WD Blue SN550 de 250 GB es un SSD NVMe M.2 con una velocidad de lectura de hasta 2400 MB/s y escritura de 1950 MB/s. Proporciona una mejora significativa en el rendimiento para aquellos que buscan una opción NVMe asequible."
    },
    {
      "id": 214,
      "id_category": 9,
      "brand": "Samsung",
      "name": "Samsung 970 EVO Plus 250 GB",
      "price": 129,
      "info": "Lanzado en 2019, el Samsung 970 EVO Plus de 250 GB es un SSD NVMe M.2 con una velocidad de lectura de hasta 3500 MB/s y escritura de 3300 MB/s. Ofrece un alto rendimiento para aplicaciones y juegos exigentes."
    },
    {
      "id": 215,
      "id_category": 9,
      "brand": "ADATA",
      "name": "ADATA XPG SX8200 Pro 256 GB",
      "price": 119,
      "info": "Lanzado en 2019, el ADATA XPG SX8200 Pro de 256 GB es un SSD NVMe M.2 con una velocidad de lectura de hasta 3500 MB/s y escritura de 3000 MB/s. Ideal para usuarios que buscan un rendimiento elevado en un formato compacto."
    },
    {
      "id": 216,
      "id_category": 9,
      "brand": "Corsair",
      "name": "Corsair MP600 500 GB",
      "price": 169,
      "info": "Lanzado en 2020, el Corsair MP600 de 500 GB es un SSD NVMe M.2 con una velocidad de lectura de hasta 4950 MB/s y escritura de 4250 MB/s. Compatible con PCIe 4.0, es ideal para usuarios que buscan alto rendimiento en aplicaciones y juegos."
    },
    {
      "id": 217,
      "id_category": 9,
      "brand": "WD",
      "name": "WD Black SN850 500 GB",
      "price": 189,
      "info": "Lanzado en 2021, el WD Black SN850 de 500 GB es un SSD NVMe M.2 con una velocidad de lectura de hasta 7000 MB/s y escritura de 5300 MB/s. Ideal para gaming y aplicaciones que requieren máxima velocidad y rendimiento."
    },
    {
      "id": 218,
      "id_category": 9,
      "brand": "Samsung",
      "name": "Samsung 980 PRO 500 GB",
      "price": 199,
      "info": "Lanzado en 2021, el Samsung 980 PRO de 500 GB es un SSD NVMe M.2 con una velocidad de lectura de hasta 7000 MB/s y escritura de 5000 MB/s. Ofrece un rendimiento excepcional y es ideal para aplicaciones que requieren alta velocidad y eficiencia."
    },
    {
      "id": 219,
      "id_category": 9,
      "brand": "Crucial",
      "name": "Crucial P5 Plus 500 GB",
      "price": 189,
      "info": "Lanzado en 2021, el Crucial P5 Plus de 500 GB es un SSD NVMe M.2 con una velocidad de lectura de hasta 6600 MB/s y escritura de 5000 MB/s. Ideal para usuarios que necesitan alta velocidad para gaming y aplicaciones intensivas."
    },
    {
      "id": 220,
      "id_category": 9,
      "brand": "Samsung",
      "name": "Samsung 980 PRO 1 TB",
      "price": 259,
      "info": "Lanzado en 2021, el Samsung 980 PRO de 1 TB es un SSD NVMe M.2 con una velocidad de lectura de hasta 7000 MB/s y escritura de 5000 MB/s. Ofrece un rendimiento excepcional y es ideal para aplicaciones que requieren alta velocidad y eficiencia."
    },
    {
      "id": 221,
      "id_category": 9,
      "brand": "Corsair",
      "name": "Corsair MP600 1 TB",
      "price": 229,
      "info": "Lanzado en 2020, el Corsair MP600 de 1 TB es un SSD NVMe M.2 con una velocidad de lectura de hasta 4950 MB/s y escritura de 4250 MB/s. Compatible con PCIe 4.0, ofrece un rendimiento superior ideal para gaming y aplicaciones profesionales."
    },
    {
      "id": 222,
      "id_category": 9,
      "brand": "WD",
      "name": "WD Black SN850 1 TB",
      "price": 249,
      "info": "Lanzado en 2021, el WD Black SN850 de 1 TB es un SSD NVMe M.2 con una velocidad de lectura de hasta 7000 MB/s y escritura de 5300 MB/s. Es uno de los SSDs más rápidos en el mercado, ideal para aplicaciones que requieren un rendimiento extremo y gaming de alta gama."
    },
    {
      "id": 223,
      "id_category": 9,
      "brand": "Samsung",
      "name": "Samsung 970 EVO Plus 2 TB",
      "price": 399,
      "info": "Lanzado en 2019, el Samsung 970 EVO Plus de 2 TB es un SSD NVMe M.2 con una velocidad de lectura de hasta 3500 MB/s y escritura de 3300 MB/s. Ofrece un rendimiento excelente y es ideal para aplicaciones profesionales y gaming exigente."
    },
    {
      "id": 224,
      "id_category": 9,
      "brand": "Corsair",
      "name": "Corsair MP600 2 TB",
      "price": 399,
      "info": "Lanzado en 2020, el Corsair MP600 de 2 TB es un SSD NVMe M.2 con una velocidad de lectura de hasta 4950 MB/s y escritura de 4250 MB/s. Compatible con PCIe 4.0, proporciona un rendimiento superior y gran capacidad para aplicaciones de alto rendimiento."
    },
    {
      "id": 225,
      "id_category": 9,
      "brand": "WD",
      "name": "WD Black SN850 2 TB",
      "price": 449,
      "info": "Lanzado en 2021, el WD Black SN850 de 2 TB es un SSD NVMe M.2 con una velocidad de lectura de hasta 7000 MB/s y escritura de 5300 MB/s. Ideal para gaming de alta gama y aplicaciones que requieren un rendimiento extremo y gran capacidad."
    },
    {
      "id": 226,
      "id_category": 9,
      "brand": "Samsung",
      "name": "Samsung 980 PRO 2 TB",
      "price": 499,
      "info": "Lanzado en 2021, el Samsung 980 PRO de 2 TB es un SSD NVMe M.2 con una velocidad de lectura de hasta 7000 MB/s y escritura de 5000 MB/s. Ofrece un rendimiento excepcional y es perfecto para aplicaciones intensivas y almacenamiento de gran capacidad."
    },
    {
      "id": 227,
      "id_category": 9,
      "brand": "Crucial",
      "name": "Crucial P5 Plus 2 TB",
      "price": 399,
      "info": "Lanzado en 2021, el Crucial P5 Plus de 2 TB es un SSD NVMe M.2 con una velocidad de lectura de hasta 6600 MB/s y escritura de 5000 MB/s. Ideal para usuarios que necesitan alta velocidad y gran capacidad para gaming y aplicaciones profesionales."
    },
    {
      "id": 228,
      "id_category": 9,
      "brand": "Corsair",
      "name": "Corsair MP600 4 TB",
      "price": 799,
      "info": "Lanzado en 2021, el Corsair MP600 de 4 TB es un SSD NVMe M.2 con una velocidad de lectura de hasta 4950 MB/s y escritura de 4250 MB/s. Compatible con PCIe 4.0, proporciona una gran capacidad y rendimiento superior para aplicaciones intensivas y almacenamiento masivo."
    },
    {
      "id": 229,
      "id_category": 9,
      "brand": "Sabrent",
      "name": "Sabrent Rocket 4 Plus 4 TB",
      "price": 899,
      "info": "Lanzado en 2022, el Sabrent Rocket 4 Plus de 4 TB es un SSD NVMe M.2 con una velocidad de lectura de hasta 7100 MB/s y escritura de 6600 MB/s. Ofrece una capacidad masiva y velocidad extrema, ideal para profesionales y usuarios que requieren mucho espacio y alto rendimiento."
    },
    // HDDs:
    {
      "id": 230,
      "id_category": 10,
      "brand": "Seagate",
      "name": "Seagate Barracuda 1 TB",
      "price": 49,
      "info": "Lanzado en 2020, el Seagate Barracuda de 1 TB es un HDD de 3.5 pulgadas con una velocidad de rotación de 7200 RPM. Ofrece un equilibrio entre rendimiento y capacidad para almacenamiento general y uso diario."
    },
    {
      "id": 231,
      "id_category": 10,
      "brand": "Western Digital",
      "name": "WD Blue 1 TB",
      "price": 45,
      "info": "Lanzado en 2021, el WD Blue de 1 TB es un HDD de 3.5 pulgadas con 7200 RPM. Ideal para usuarios que buscan una opción económica con buena capacidad para almacenamiento básico."
    },
    {
      "id": 232,
      "id_category": 10,
      "brand": "Toshiba",
      "name": "Toshiba P300 1 TB",
      "price": 47,
      "info": "Lanzado en 2021, el Toshiba P300 de 1 TB es un HDD de 3.5 pulgadas con 7200 RPM. Proporciona un rendimiento sólido para aplicaciones generales y almacenamiento personal."
    },
    {
      "id": 233,
      "id_category": 10,
      "brand": "Seagate",
      "name": "Seagate Barracuda 2 TB",
      "price": 59,
      "info": "Lanzado en 2021, el Seagate Barracuda de 2 TB es un HDD de 3.5 pulgadas con 7200 RPM. Perfecto para usuarios que necesitan una mayor capacidad sin sacrificar el rendimiento."
    },
    {
      "id": 234,
      "id_category": 10,
      "brand": "Western Digital",
      "name": "WD Blue 2 TB",
      "price": 59,
      "info": "Lanzado en 2021, el WD Blue de 2 TB es un HDD de 3.5 pulgadas con 7200 RPM. Ideal para almacenamiento general con una buena capacidad a un costo accesible."
    },
    {
      "id": 235,
      "id_category": 10,
      "brand": "Toshiba",
      "name": "Toshiba X300 2 TB",
      "price": 79,
      "info": "Lanzado en 2021, el Toshiba X300 de 2 TB es un HDD de 3.5 pulgadas con 7200 RPM. Diseñado para entusiastas del rendimiento con gran capacidad y fiabilidad."
    },
    {
      "id": 236,
      "id_category": 10,
      "brand": "Seagate",
      "name": "Seagate IronWolf 4 TB",
      "price": 99,
      "info": "Lanzado en 2020, el Seagate IronWolf de 4 TB es un HDD de 3.5 pulgadas con 7200 RPM. Optimizado para NAS y sistemas de almacenamiento continuo con alta capacidad y durabilidad."
    },
    {
      "id": 237,
      "id_category": 10,
      "brand": "Western Digital",
      "name": "WD Black 4 TB",
      "price": 139,
      "info": "Lanzado en 2021, el WD Black de 4 TB es un HDD de 3.5 pulgadas con 7200 RPM. Ofrece alto rendimiento para aplicaciones que requieren un acceso rápido a grandes volúmenes de datos."
    },
    {
      "id": 238,
      "id_category": 10,
      "brand": "Toshiba",
      "name": "Toshiba N300 4 TB",
      "price": 119,
      "info": "Lanzado en 2021, el Toshiba N300 de 4 TB es un HDD de 3.5 pulgadas con 7200 RPM. Ideal para NAS con alta demanda de capacidad y fiabilidad."
    },
    {
      "id": 239,
      "id_category": 10,
      "brand": "Seagate",
      "name": "Seagate IronWolf 6 TB",
      "price": 149,
      "info": "Lanzado en 2020, el Seagate IronWolf de 6 TB es un HDD de 3.5 pulgadas con 7200 RPM. Optimizado para NAS y entornos de almacenamiento continuo con alta capacidad y durabilidad."
    },
    {
      "id": 240,
      "id_category": 10,
      "brand": "Western Digital",
      "name": "WD Black 6 TB",
      "price": 169,
      "info": "Lanzado en 2021, el WD Black de 6 TB es un HDD de 3.5 pulgadas con 7200 RPM. Ofrece una capacidad superior y rendimiento para aplicaciones intensivas."
    },
    {
      "id": 241,
      "id_category": 10,
      "brand": "Toshiba",
      "name": "Toshiba N300 6 TB",
      "price": 139,
      "info": "Lanzado en 2021, el Toshiba N300 de 6 TB es un HDD de 3.5 pulgadas con 7200 RPM. Ideal para sistemas de almacenamiento de alto rendimiento y NAS."
    },
    {
      "id": 242,
      "id_category": 10,
      "brand": "Seagate",
      "name": "Seagate Exos X16 10 TB",
      "price": 249,
      "info": "Lanzado en 2021, el Seagate Exos X16 de 10 TB es un HDD de 3.5 pulgadas con 7200 RPM. Diseñado para entornos de servidor y almacenamiento en grandes volúmenes con alta densidad y rendimiento."
    },
    {
      "id": 243,
      "id_category": 10,
      "brand": "Western Digital",
      "name": "WD Gold 10 TB",
      "price": 279,
      "info": "Lanzado en 2022, el WD Gold de 10 TB es un HDD de 3.5 pulgadas con 7200 RPM. Ofrece alta capacidad y rendimiento para centros de datos y aplicaciones empresariales."
    },
    {
      "id": 244,
      "id_category": 10,
      "brand": "Seagate",
      "name": "Seagate Exos X16 12 TB",
      "price": 299,
      "info": "Lanzado en 2021, el Seagate Exos X16 de 12 TB es un HDD de 3.5 pulgadas con 7200 RPM. Diseñado para entornos de servidor y almacenamiento en grandes volúmenes con alta densidad y rendimiento."
    },
    {
      "id": 245,
      "id_category": 10,
      "brand": "Western Digital",
      "name": "WD Gold 12 TB",
      "price": 319,
      "info": "Lanzado en 2022, el WD Gold de 12 TB es un HDD de 3.5 pulgadas con 7200 RPM. Ideal para almacenamiento en grandes volúmenes y entornos de alto rendimiento."
    },
    // PSUs:
    {
      "id": 246,
      "id_category": 11,
      "brand": "Corsair",
      "name": "Corsair CV450 450W 80 PLUS Bronze",
      "price": 45,
      "info": "La Corsair CV450 es una fuente de poder de 450W con certificación 80 PLUS Bronze, ofreciendo eficiencia y estabilidad en sistemas de gama baja a media. Ideal para equipos básicos y de oficina."
    },
    {
      "id": 247,
      "id_category": 11,
      "brand": "EVGA",
      "name": "EVGA 500 W1 500W 80 PLUS White",
      "price": 50,
      "info": "La EVGA 500 W1 proporciona 500W de potencia con certificación 80 PLUS White. Es una opción económica para sistemas que no requieren una alta eficiencia energética."
    },
    {
      "id": 248,
      "id_category": 11,
      "brand": "Thermaltake",
      "name": "Thermaltake Smart 600W 80 PLUS",
      "price": 55,
      "info": "La Thermaltake Smart de 600W tiene certificación 80 PLUS, garantizando una buena eficiencia para sistemas de gama media a alta. Ofrece una solución robusta para PCs con configuraciones más exigentes."
    },
    {
      "id": 249,
      "id_category": 11,
      "brand": "Seasonic",
      "name": "Seasonic S12III 650W 80 PLUS Bronze",
      "price": 70,
      "info": "La Seasonic S12III de 650W con certificación 80 PLUS Bronze proporciona una alta eficiencia y confiabilidad para sistemas con una mayor demanda energética."
    },
    {
      "id": 250,
      "id_category": 11,
      "brand": "Corsair",
      "name": "Corsair RM750 750W 80 PLUS Gold",
      "price": 95,
      "info": "La Corsair RM750 ofrece 750W de potencia con certificación 80 PLUS Gold. Ideal para sistemas de alto rendimiento que requieren eficiencia energética superior y estabilidad."
    },
    {
      "id": 251,
      "id_category": 11,
      "brand": "Be Quiet!",
      "name": "Be Quiet! Straight Power 11 750W 80 PLUS Gold",
      "price": 115,
      "info": "La Be Quiet! Straight Power 11 de 750W con certificación 80 PLUS Gold destaca por su funcionamiento silencioso y alta eficiencia, ideal para configuraciones premium."
    },
    {
      "id": 252,
      "id_category": 11,
      "brand": "ASUS",
      "name": "ASUS ROG Strix 850W 80 PLUS Gold",
      "price": 130,
      "info": "La ASUS ROG Strix de 850W con certificación 80 PLUS Gold es una fuente de poder de alta calidad diseñada para entusiastas del hardware y gamers, ofreciendo eficiencia y rendimiento superior."
    },
    {
      "id": 253,
      "id_category": 11,
      "brand": "Cooler Master",
      "name": "Cooler Master V850 850W 80 PLUS Platinum",
      "price": 160,
      "info": "La Cooler Master V850 ofrece 850W de potencia con certificación 80 PLUS Platinum. Brinda una eficiencia energética excepcional y una estabilidad óptima para configuraciones de gama alta."
    },
    {
      "id": 254,
      "id_category": 11,
      "brand": "EVGA",
      "name": "EVGA SuperNOVA 1000 G5 1000W 80 PLUS Gold",
      "price": 180,
      "info": "La EVGA SuperNOVA 1000 G5 de 1000W con certificación 80 PLUS Gold ofrece una potencia robusta y eficiente para sistemas con altos requisitos energéticos y configuraciones avanzadas."
    },
    {
      "id": 255,
      "id_category": 11,
      "brand": "Seasonic",
      "name": "Seasonic PRIME TX-1000 1000W 80 PLUS Titanium",
      "price": 220,
      "info": "La Seasonic PRIME TX-1000 de 1000W con certificación 80 PLUS Titanium es una fuente de poder premium que ofrece la mejor eficiencia energética y rendimiento para sistemas de alta gama."
    },
    {
      "id": 256,
      "id_category": 11,
      "brand": "Corsair",
      "name": "Corsair AX1200i 1200W 80 PLUS Titanium",
      "price": 290,
      "info": "La Corsair AX1200i ofrece 1200W de potencia con certificación 80 PLUS Titanium, brindando eficiencia energética excepcional y estabilidad para las configuraciones más exigentes y sistemas de alto rendimiento."
    },
    {
      "id": 257,
      "id_category": 11,
      "brand": "Cooler Master",
      "name": "Cooler Master V1200 1200W 80 PLUS Platinum",
      "price": 260,
      "info": "La Cooler Master V1200 de 1200W con certificación 80 PLUS Platinum es ideal para sistemas de alto rendimiento que requieren gran potencia y eficiencia energética superior."
    },
    {
      "id": 258,
      "id_category": 11,
      "brand": "Be Quiet!",
      "name": "Be Quiet! Dark Power Pro 12 1500W 80 PLUS Titanium",
      "price": 350,
      "info": "La Be Quiet! Dark Power Pro 12 de 1500W con certificación 80 PLUS Titanium es una fuente de poder de gama ultra alta, diseñada para configuraciones extremas y estaciones de trabajo que requieren máxima potencia y eficiencia."
    },
    // Cooling AIO:
    {
      "id": 259,
      "id_category": 12,
      "brand": "Corsair",
      "name": "Corsair H60 (2018) 120mm",
      "price": 75,
      "info": "El Corsair H60 (2018) es un cooler AIO de 120mm, ideal para mejorar la refrigeración en sistemas compactos o de gama baja. Ofrece un buen equilibrio entre rendimiento y tamaño."
    },
    {
      "id": 260,
      "id_category": 12,
      "brand": "Cooler Master",
      "name": "Cooler Master MasterLiquid ML120L 120mm",
      "price": 80,
      "info": "El Cooler Master MasterLiquid ML120L es un AIO de 120mm que proporciona una refrigeración eficiente y silenciosa para sistemas de gama media, con un diseño compacto y buen rendimiento."
    },
    {
      "id": 261,
      "id_category": 12,
      "brand": "NZXT",
      "name": "NZXT Kraken X53 240mm",
      "price": 130,
      "info": "El NZXT Kraken X53 es un cooler AIO de 240mm, ofreciendo una excelente refrigeración y un diseño estético con iluminación RGB. Ideal para sistemas de gama alta con overclocking."
    },
    {
      "id": 262,
      "id_category": 12,
      "brand": "Corsair",
      "name": "Corsair H100i RGB Platinum 240mm",
      "price": 150,
      "info": "El Corsair H100i RGB Platinum es un cooler AIO de 240mm con iluminación RGB y alto rendimiento, adecuado para sistemas de alto rendimiento y entusiastas del overclocking."
    },
    {
      "id": 263,
      "id_category": 12,
      "brand": "Arctic",
      "name": "Arctic Liquid Freezer II 240mm",
      "price": 160,
      "info": "El Arctic Liquid Freezer II de 240mm ofrece una refrigeración excepcional con un diseño compacto y un ventilador adicional en la bomba para mejorar el flujo de aire y la refrigeración de los VRM."
    },
    {
      "id": 264,
      "id_category": 12,
      "brand": "Cooler Master",
      "name": "Cooler Master MasterLiquid ML240L V2 240mm",
      "price": 140,
      "info": "El Cooler Master MasterLiquid ML240L V2 es un AIO de 240mm con un diseño actualizado y mejoras en el rendimiento de refrigeración y reducción de ruido, ideal para sistemas de gama media a alta."
    },
    {
      "id": 265,
      "id_category": 12,
      "brand": "ASUS",
      "name": "ASUS ROG Strix LC 240 RGB 240mm",
      "price": 170,
      "info": "El ASUS ROG Strix LC 240 RGB combina refrigeración líquida eficiente con iluminación RGB personalizable, ideal para gamers y entusiastas que buscan rendimiento y estética."
    },
    {
      "id": 266,
      "id_category": 12,
      "brand": "Corsair",
      "name": "Corsair H150i Elite Capellix 360mm",
      "price": 220,
      "info": "El Corsair H150i Elite Capellix es un cooler AIO de 360mm con iluminación RGB Capellix y un rendimiento de refrigeración superior, ideal para configuraciones de gama alta y overclocking extremo."
    },
    {
      "id": 267,
      "id_category": 12,
      "brand": "Thermaltake",
      "name": "Thermaltake Floe Riing 360 TT Premium 360mm",
      "price": 230,
      "info": "El Thermaltake Floe Riing 360 TT Premium ofrece una refrigeración líquida de alto rendimiento con tres ventiladores de 120mm y un diseño estético con iluminación RGB, ideal para sistemas de alto rendimiento."
    },
    {
      "id": 268,
      "id_category": 12,
      "brand": "NZXT",
      "name": "NZXT Kraken Z73 360mm",
      "price": 250,
      "info": "El NZXT Kraken Z73 de 360mm es un cooler AIO premium que combina un rendimiento de refrigeración excepcional con una pantalla LCD personalizada en la bomba para mostrar información del sistema y gráficos personalizados."
    },
    // Cooling by Air:
    {
      "id": 269,
      "id_category": 13,
      "brand": "Noctua",
      "name": "Noctua NH-U12S",
      "price": 70,
      "info": "El Noctua NH-U12S es un cooler por aire de 120mm con un diseño compacto y alto rendimiento. Ideal para sistemas de gama media que requieren una refrigeración eficiente y silenciosa."
    },
    {
      "id": 270,
      "id_category": 13,
      "brand": "Cooler Master",
      "name": "Cooler Master Hyper 212 EVO",
      "price": 50,
      "info": "El Cooler Master Hyper 212 EVO es un cooler por aire de 120mm conocido por su gran relación calidad-precio. Ofrece un rendimiento sólido para sistemas de gama media con un diseño compacto."
    },
    {
      "id": 271,
      "id_category": 13,
      "brand": "Be Quiet!",
      "name": "Be Quiet! Dark Rock Pro 4",
      "price": 90,
      "info": "El Be Quiet! Dark Rock Pro 4 es un cooler por aire de doble torre con ventiladores silenciosos de 135mm y 120mm. Ofrece un excelente rendimiento para sistemas de alto rendimiento y es extremadamente silencioso."
    },
    {
      "id": 272,
      "id_category": 13,
      "brand": "Noctua",
      "name": "Noctua NH-D15",
      "price": 100,
      "info": "El Noctua NH-D15 es un cooler por aire de doble torre con dos ventiladores de 140mm. Ofrece un rendimiento excepcional y es ideal para overclocking extremo y configuraciones de alto rendimiento."
    },
    {
      "id": 273,
      "id_category": 13,
      "brand": "Arctic",
      "name": "Arctic Freezer 34 eSports DUO",
      "price": 60,
      "info": "El Arctic Freezer 34 eSports DUO es un cooler por aire de 120mm con dos ventiladores para una mayor presión de aire y rendimiento. Ideal para sistemas de gama media a alta con un buen equilibrio entre costo y eficiencia."
    },
    {
      "id": 274,
      "id_category": 13,
      "brand": "Cooler Master",
      "name": "Cooler Master Hyper 212 Black Edition",
      "price": 55,
      "info": "El Cooler Master Hyper 212 Black Edition es una versión estilizada del popular Hyper 212 EVO, con un diseño negro y ventilador de 120mm. Ofrece un rendimiento sólido y estético para sistemas de gama media."
    },
    {
      "id": 275,
      "id_category": 13,
      "brand": "Thermaltake",
      "name": "Thermaltake Frio OCK",
      "price": 80,
      "info": "El Thermaltake Frio OCK es un cooler por aire de doble torre con dos ventiladores de 120mm y un diseño robusto para una alta capacidad de refrigeración. Ideal para sistemas de alto rendimiento y overclocking."
    },
    {
      "id": 276,
      "id_category": 13,
      "brand": "DeepCool",
      "name": "DeepCool Assassin III",
      "price": 90,
      "info": "El DeepCool Assassin III es un cooler por aire de doble torre con dos ventiladores de 140mm. Ofrece un excelente rendimiento en refrigeración y es adecuado para configuraciones de alto rendimiento y overclocking."
    },
    {
      "id": 277,
      "id_category": 13,
      "brand": "Noctua",
      "name": "Noctua NH-L12S",
      "price": 60,
      "info": "El Noctua NH-L12S es un cooler por aire compacto de 120mm, ideal para cajas pequeñas o sistemas de factor de forma reducido. Ofrece un buen rendimiento de refrigeración en un diseño compacto y silencioso."
    },
    {
      "id": 278,
      "id_category": 13,
      "brand": "Scythe",
      "name": "Scythe Mugen 5 Rev. B",
      "price": 75,
      "info": "El Scythe Mugen 5 Rev. B es un cooler por aire de 120mm con un diseño de torre y ventilador Kaze Flex de 120mm. Ofrece un buen equilibrio entre rendimiento y ruido para sistemas de gama media y alta."
    },
    {
      "id": 279,
      "id_category": 13,
      "brand": "Zalman",
      "name": "Zalman CNPS10X Performa Black",
      "price": 45,
      "info": "El Zalman CNPS10X Performa Black es un cooler por aire de 120mm con un diseño de torre compacta y ventilador negro. Ofrece un rendimiento decente a un precio accesible para sistemas de gama media."
    },
    {
      "id": 280,
      "id_category": 13,
      "brand": "Enermax",
      "name": "Enermax ETS-T50 AXE",
      "price": 65,
      "info": "El Enermax ETS-T50 AXE es un cooler por aire de 120mm con un diseño de torre y ventiladores de alto flujo. Ideal para sistemas que necesitan una refrigeración eficiente y silenciosa con un buen diseño estético."
    },
    {
      "id": 281,
      "id_category": 13,
      "brand": "Cooler Master",
      "name": "Cooler Master Hyper 212 Black Edition V2",
      "price": 60,
      "info": "El Cooler Master Hyper 212 Black Edition V2 es una actualización del Hyper 212 con un diseño más robusto y ventilador de 120mm. Ofrece un buen rendimiento a un precio competitivo para sistemas de gama media."
    },
    // Cases:
    {
      "id": 282,
      "id_category": 14,
      "brand": "Cooler Master",
      "name": "Cooler Master MasterBox Q300L",
      "price": 60,
      "info": "El Cooler Master MasterBox Q300L es un gabinete compacto y versátil con un diseño modular y una buena ventilación. Ideal para configuraciones de tamaño compacto con opciones de personalización de flujo de aire."
    },
    {
      "id": 283,
      "id_category": 14,
      "brand": "Fractal Design",
      "name": "Fractal Design Meshify C",
      "price": 90,
      "info": "El Fractal Design Meshify C es un gabinete ATX con un diseño de malla en el panel frontal para un excelente flujo de aire. Ofrece un interior espacioso y una gestión de cables limpia, ideal para configuraciones de alto rendimiento."
    },
    {
      "id": 284,
      "id_category": 14,
      "brand": "Corsair",
      "name": "Corsair 4000D Airflow",
      "price": 80,
      "info": "El Corsair 4000D Airflow es un gabinete ATX con un diseño de malla frontal para un óptimo flujo de aire y refrigeración. Incluye una buena gestión de cables y opciones para expansión de enfriamiento."
    },
    {
      "id": 285,
      "id_category": 14,
      "brand": "Lian Li",
      "name": "Lian Li PC-O11 Dynamic",
      "price": 150,
      "info": "El Lian Li PC-O11 Dynamic es un gabinete ATX de alto rendimiento con paneles de vidrio templado y un diseño modular que facilita la instalación de sistemas de refrigeración líquida. Ideal para entusiastas y sistemas de alto rendimiento."
    },
    {
      "id": 286,
      "id_category": 14,
      "brand": "Phanteks",
      "name": "Phanteks Eclipse P400A",
      "price": 70,
      "info": "El Phanteks Eclipse P400A es un gabinete ATX con un diseño de malla frontal para un excelente flujo de aire y opciones de enfriamiento. Ofrece un buen equilibrio entre diseño y funcionalidad a un precio accesible."
    },
    {
      "id": 287,
      "id_category": 14,
      "brand": "Thermaltake",
      "name": "Thermaltake Versa H21",
      "price": 50,
      "info": "El Thermaltake Versa H21 es un gabinete ATX con un diseño sencillo y un buen flujo de aire. Ofrece un interior espacioso y opciones básicas para una construcción de PC económica."
    },
    {
      "id": 288,
      "id_category": 14,
      "brand": "Antec",
      "name": "Antec DF600 FLUX",
      "price": 75,
      "info": "El Antec DF600 FLUX es un gabinete ATX con diseño de malla y ventiladores preinstalados para un excelente flujo de aire. Ideal para configuraciones de gama media que requieren una buena refrigeración y facilidad de instalación."
    },
    {
      "id": 289,
      "id_category": 14,
      "brand": "be quiet!",
      "name": "be quiet! Pure Base 500",
      "price": 100,
      "info": "El be quiet! Pure Base 500 es un gabinete ATX diseñado para ofrecer un funcionamiento silencioso con un diseño de malla filtrada y una buena gestión de cables. Ideal para sistemas que priorizan la tranquilidad."
    },
    {
      "id": 290,
      "id_category": 14,
      "brand": "SilverStone",
      "name": "SilverStone RL06",
      "price": 65,
      "info": "El SilverStone RL06 es un gabinete ATX con un diseño de malla frontal y ventiladores preinstalados para un buen flujo de aire. Ofrece una buena capacidad de expansión y refrigeración a un precio accesible."
    },
    {
      "id": 291,
      "id_category": 14,
      "brand": "Corsair",
      "name": "Corsair iCUE 4000X RGB",
      "price": 110,
      "info": "El Corsair iCUE 4000X RGB es un gabinete ATX con paneles de vidrio templado y ventiladores RGB preinstalados. Ofrece un excelente flujo de aire, iluminación personalizable y opciones para enfriamiento avanzado."
    },
    {
      "id": 292,
      "id_category": 14,
      "brand": "Fractal Design",
      "name": "Fractal Design Define 7",
      "price": 160,
      "info": "El Fractal Design Define 7 es un gabinete ATX de alta gama con paneles de acero y vidrio templado, excelente capacidad de enfriamiento y opciones de personalización. Ideal para configuraciones de alto rendimiento y silencio."
    },
    {
      "id": 293,
      "id_category": 14,
      "brand": "Cooler Master",
      "name": "Cooler Master H500",
      "price": 130,
      "info": "El Cooler Master H500 es un gabinete ATX con un diseño de malla frontal y dos ventiladores de 200 mm para un excelente flujo de aire. Incluye paneles de vidrio templado y opciones de enfriamiento avanzadas."
    },
    {
      "id": 294,
      "id_category": 14,
      "brand": "Lian Li",
      "name": "Lian Li PC-011 XL",
      "price": 180,
      "info": "El Lian Li PC-011 XL es un gabinete ATX XL con paneles de vidrio templado y una estructura modular que permite una amplia personalización del flujo de aire y del enfriamiento. Ideal para sistemas de alto rendimiento y construcciones avanzadas."
    },
    {
      "id": 295,
      "id_category": 14,
      "brand": "Phanteks",
      "name": "Phanteks Eclipse P500A",
      "price": 100,
      "info": "El Phanteks Eclipse P500A es un gabinete ATX con un diseño de malla en el panel frontal para una gran entrada de aire. Ofrece un amplio espacio interior y opciones para sistemas de refrigeración líquida y aire."
    },
    {
      "id": 296,
      "id_category": 14,
      "brand": "Corsair",
      "name": "Corsair 275R Airflow",
      "price": 90,
      "info": "El Corsair 275R Airflow es un gabinete ATX con un diseño de malla frontal para un excelente flujo de aire. Incluye ventiladores preinstalados y una buena capacidad de expansión para hardware de alto rendimiento."
    },
    {
      "id": 297,
      "id_category": 14,
      "brand": "Thermaltake",
      "name": "Thermaltake Tower 500",
      "price": 100,
      "info": "El Thermaltake Tower 500 es un gabinete ATX con un diseño de malla completa para un flujo de aire optimizado. Ofrece un diseño modular y amplio espacio interior para configuraciones de alta gama."
    },
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
      return this.product.filter(product => product.brand.toLowerCase() === brand);
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