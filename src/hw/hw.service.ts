/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { FilterCpuDto } from './dto/filterCpu.dto';

@Injectable()
export class HwService {
  // CPUS AMD
  private amd = {
    "zen4": [
      {
        "name": 'Ryzen 9 7950X',
        "cores": "16",
        "threads": "32",
        "maxfrec": "5.70GHz",
        "tdp": "170W",
        "socket": "AM5",
        "arq": "Zen 4",
        "process": "5nm",
        "l3": "64MB",
        "year": "2022",
        "igpu": "No"
      },
      {
        "name": "Ryzen 9 7900X",
        "cores": "12",
        "threads": "24",
        "maxfrec": "5.60GHz",
        "tdp": "170W",
        "socket": "AM5",
        "arq": "Zen 4",
        "process": "5nm",
        "l3": "64MB",
        "year": "2022",
        "igpu": "No"
      },
      {
        "name": "Ryzen 7 7800X3D",
        "cores": "8",
        "threads": "16",
        "maxfrec": "5.0GHz",
        "tdp": "120W",
        "socket": "AM5",
        "arq": "Zen 4",
        "process": "5nm",
        "l3": "96MB (Con tecnologia 3D V-cache)",
        "year": "2022",
        "igpu": "No"
      },
      {
        "name": "Ryzen 7 7700X",
        "cores": "8",
        "threads": "16",
        "maxfrec": "5.4 GHz",
        "tdp": "105W",
        "socket": "AM5",
        "arq": "Zen 4",
        "process": "5nm",
        "l3": "32 MB",
        "year": "2022",
        "igpu": "No"
      },
      {
        "name": "Ryzen 5 7600X",
        "cores": "6",
        "threads": "12",
        "maxfrec": "5.3 GHz",
        "tdp": "105W",
        "socket": "AM5",
        "arq": "Zen 4",
        "process": "5nm",
        "l3": "32 MB",
        "year": "2022",
        "igpu": "No"
      },
      {
        "name": "Ryzen 5 7600",
        "cores": "6",
        "threads": "12",
        "maxfrec": "5.1 GHz",
        "tdp": "65W",
        "socket": "AM5",
        "arq": "Zen 4",
        "process": "5nm",
        "l3": "32 MB",
        "year": "2022",
        "igpu": "Si"
      },
      {
        "name": "Ryzen 7 7700",
        "cores": "8",
        "threads": "16",
        "maxfrec": "5.3 GHz",
        "tdp": "65W",
        "socket": "AM5",
        "arq": "Zen 4",
        "process": "5nm",
        "l3": "32 MB",
        "year": "2022",
        "igpu": "Si"
      },
      {
        "name": "Ryzen 9 7900",
        "cores": "12",
        "threads": "24",
        "maxfrec": "5.4 GHz",
        "tdp": "65W",
        "socket": "AM5",
        "arq": "Zen 4",
        "process": "5nm",
        "l3": "64 MB",
        "year": "2022",
        "igpu": "Si"
      }
    ],
    "zen3": [
      {
        "name": "Ryzen 9 5950X",
        "cores": "16",
        "threads": "32",
        "maxfrec": "4.9 GHz",
        "tdp": "105W",
        "socket": "AM4",
        "arq": "Zen 3",
        "process": "7nm",
        "l3": "64 MB",
        "year": "2020",
        "igpu": "No"
      },
      {
        "name": "Ryzen 9 5900X",
        "cores": "12",
        "threads": "24",
        "maxfrec": "4.8 GHz",
        "tdp": "105W",
        "socket": "AM4",
        "arq": "Zen 3",
        "process": "7nm",
        "l3": "64 MB",
        "year": "2020",
        "igpu": "No"
      },
      {
        "name": "Ryzen 7 5800X3D",
        "cores": "8",
        "threads": "16",
        "maxfrec": "4.5 GHz",
        "tdp": "105W",
        "socket": "AM4",
        "arq": "Zen 3",
        "process": "7nm",
        "l3": "96 MB (Con tecnologia 3D V-cache)",
        "year": "2022",
        "igpu": "No"
      },
      {
        "name": "Ryzen 7 5800X",
        "cores": "8",
        "threads": "16",
        "maxfrec": "4.7 GHz",
        "tdp": "105W",
        "socket": "AM4",
        "arq": "Zen 3",
        "process": "7nm",
        "l3": "32 MB",
        "year": "2020",
        "igpu": "No"
      },
      {
        "name": "Ryzen 5 5600X",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.6 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen 3",
        "process": "7nm",
        "l3": "32 MB",
        "year": "2020",
        "igpu": "No"
      },
      {
        "name": "Ryzen 5 5600",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.4 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen 3",
        "process": "7nm",
        "l3": "32 MB",
        "year": "2021",
        "igpu": "No"
      },
      {
        "name": "Ryzen 7 5700G",
        "cores": "8",
        "threads": "16",
        "maxfrec": "4.6 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen 3",
        "process": "7nm",
        "l3": "16 MB",
        "year": "2021",
        "igpu": "Si"
      },
      {
        "name": "Ryzen 5 5600G",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.4 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen 3",
        "process": "7nm",
        "l3": "16 MB",
        "year": "2021",
        "igpu": "Si"
      },
      {
        "name": "Ryzen 3 5300G",
        "cores": "4",
        "threads": "8",
        "maxfrec": "4.2 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen 3",
        "process": "7nm",
        "l3": "8 MB",
        "year": "2021",
        "igpu": "Si"
      }
    ],
    "zen2": [
      {
        "name": "Ryzen 9 3950X",
        "cores": "16",
        "threads": "32",
        "maxfrec": "4.7 GHz",
        "tdp": "105W",
        "socket": "AM4",
        "arq": "Zen 2",
        "process": "7nm",
        "l3": "64 MB",
        "year": "2019",
        "igpu": "No"
      },
      {
        "name": "Ryzen 9 3900X",
        "cores": "12",
        "threads": "24",
        "maxfrec": "4.6 GHz",
        "tdp": "105W",
        "socket": "AM4",
        "arq": "Zen 2",
        "process": "7nm",
        "l3": "64 MB",
        "year": "2019",
        "igpu": "No"
      },
      {
        "name": "Ryzen 7 3800X",
        "cores": "8",
        "threads": "16",
        "maxfrec": "4.5 GHz",
        "tdp": "105W",
        "socket": "AM4",
        "arq": "Zen 2",
        "process": "7nm",
        "l3": "32 MB",
        "year": "2019",
        "igpu": "No"
      },
      {
        "name": "Ryzen 7 3700X",
        "cores": "8",
        "threads": "16",
        "maxfrec": "4.4 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen 2",
        "process": "7nm",
        "l3": "32 MB",
        "year": "2019",
        "igpu": "No"
      },
      {
        "name": "Ryzen 5 3600X",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.4 GHz",
        "tdp": "95W",
        "socket": "AM4",
        "arq": "Zen 2",
        "process": "7nm",
        "l3": "32 MB",
        "year": "2019",
        "igpu": "No"
      },
      {
        "name": "Ryzen 5 3600",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.2 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen 2",
        "process": "7nm",
        "l3": "32 MB",
        "year": "2019",
        "igpu": "No"
      },
      {
        "name": "Ryzen 5 3500X",
        "cores": "6",
        "threads": "6",
        "maxfrec": "4.1 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen 2",
        "process": "7nm",
        "l3": "32 MB",
        "year": "2019",
        "igpu": "No"
      },
      {
        "name": "Ryzen 3 3300X",
        "cores": "4",
        "threads": "8",
        "maxfrec": "4.3 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen 2",
        "process": "7nm",
        "l3": "16 MB",
        "year": "2020",
        "igpu": "No"
      },
      {
        "name": "Ryzen 3 3100",
        "cores": "4",
        "threads": "8",
        "maxfrec": "3.9 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen 2",
        "process": "7nm",
        "l3": "16 MB",
        "year": "2020",
        "igpu": "No"
      },
    ],
    "zen+": [
      {
        "name": "Ryzen 5 3400G",
        "cores": "4",
        "threads": "8",
        "maxfrec": "4.2 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen+",
        "process": "12nm",
        "l3": "4 MB",
        "year": "2019",
        "igpu": "Si"
      },
      {
        "name": "Ryzen 3 3200G",
        "cores": "4",
        "threads": "4",
        "maxfrec": "4.0 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen+",
        "process": "12nm",
        "l3": "4 MB",
        "year": "2019",
        "igpu": "Si"
      },
      {
        "name": "Ryzen 7 2700X",
        "cores": "8",
        "threads": "16",
        "maxfrec": "4.3 GHz",
        "tdp": "105W",
        "socket": "AM4",
        "arq": "Zen+",
        "process": "12nm",
        "l3": "16 MB",
        "year": "2018",
        "igpu": "No"
      },
      {
        "name": "Ryzen 7 2700",
        "cores": "8",
        "threads": "16",
        "maxfrec": "4.1 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen+",
        "process": "12nm",
        "l3": "16 MB",
        "year": "2018",
        "igpu": "No"
      },
      {
        "name": "Ryzen 5 2600X",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.2 GHz",
        "tdp": "95W",
        "socket": "AM4",
        "arq": "Zen+",
        "process": "12nm",
        "l3": "16 MB",
        "year": "2018",
        "igpu": "No"
      },
      {
        "name": "Ryzen 5 2600",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.1 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen+",
        "process": "12nm",
        "l3": "16 MB",
        "year": "2018",
        "igpu": "No"
      },
      {
        "name": "Ryzen 5 2500X",
        "cores": "4",
        "threads": "8",
        "maxfrec": "4.0 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen+",
        "process": "12nm",
        "l3": "8 MB",
        "year": "2018",
        "igpu": "No"
      },
      {
        "name": "Ryzen 3 2300X",
        "cores": "4",
        "threads": "4",
        "maxfrec": "4.0 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen+",
        "process": "12nm",
        "l3": "8 MB",
        "year": "2018",
        "igpu": "No"
      }
    ],
    "zen": [
      {
        "name": "Ryzen 5 2400G",
        "cores": "4",
        "threads": "8",
        "maxfrec": "3.9 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen",
        "process": "14nm",
        "l3": "4 MB",
        "year": "2018",
        "igpu": "Si"
      },
      {
        "name": "Ryzen 3 2200G",
        "cores": "4",
        "threads": "4",
        "maxfrec": "3.7 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen",
        "process": "14nm",
        "l3": "4 MB",
        "year": "2018",
        "igpu": "Si"
      },
      {
        "name": "Ryzen 7 1800X",
        "cores": "8",
        "threads": "16",
        "maxfrec": "4.0 GHz",
        "tdp": "95W",
        "socket": "AM4",
        "arq": "Zen",
        "process": "14nm",
        "l3": "16 MB",
        "year": "2017",
        "igpu": "No"
      },
      {
        "name": "Ryzen 7 1700X",
        "cores": "8",
        "threads": "16",
        "maxfrec": "3.8 GHz",
        "tdp": "95W",
        "socket": "AM4",
        "arq": "Zen",
        "process": "14nm",
        "l3": "16 MB",
        "year": "2017",
        "igpu": "No"
      },
      {
        "name": "Ryzen 7 1700",
        "cores": "8",
        "threads": "16",
        "maxfrec": "3.7 GHz",
        "tdp": "65W",
        "socket": "AM4",
        "arq": "Zen",
        "process": "14nm",
        "l3": "16 MB",
        "year": "2017",
        "igpu": "No"
      }
    ]
  }

  //CPUS INTEL
  private intel = {
    "raptor_lake_refresh": [
      {
        "name": "Core i9-14900K",
        "cores": "24",
        "threads": "32",
        "maxfrec": "5.8 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake Refresh",
        "process": "Intel 7",
        "l3": "36 MB",
        "year": "2024",
        "igpu": "Intel UHD Graphics 770"
      },
      {
        "name": "Core i9-14900KF",
        "cores": "24",
        "threads": "32",
        "maxfrec": "5.8 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake Refresh",
        "process": "Intel 7",
        "l3": "36 MB",
        "year": "2024",
        "igpu": "No"
      },
      {
        "name": "Core i7-14700K",
        "cores": "16",
        "threads": "24",
        "maxfrec": "5.6 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake Refresh",
        "process": "Intel 7",
        "l3": "30 MB",
        "year": "2024",
        "igpu": "Intel UHD Graphics 770"
      },
      {
        "name": "Core i7-14700KF",
        "cores": "16",
        "threads": "24",
        "maxfrec": "5.6 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake Refresh",
        "process": "Intel 7",
        "l3": "30 MB",
        "year": "2024",
        "igpu": "No"
      },
      {
        "name": "Core i5-14600K",
        "cores": "14",
        "threads": "20",
        "maxfrec": "5.3 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake Refresh",
        "process": "Intel 7",
        "l3": "24 MB",
        "year": "2024",
        "igpu": "Intel UHD Graphics 770"
      },
      {
        "name": "Core i5-14600KF",
        "cores": "14",
        "threads": "20",
        "maxfrec": "5.3 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake Refresh",
        "process": "Intel 7",
        "l3": "24 MB",
        "year": "2024",
        "igpu": "No"
      }
    ],
    "raptor_lake": [
      {
        "name": "Core i9-13900K",
        "cores": "24",
        "threads": "32",
        "maxfrec": "5.8 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake",
        "process": "Intel 7",
        "l3": "36 MB",
        "year": "2022",
        "igpu": "Intel UHD Graphics 770"
      },
      {
        "name": "Core i9-13900KF",
        "cores": "24",
        "threads": "32",
        "maxfrec": "5.8 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake",
        "process": "Intel 7",
        "l3": "36 MB",
        "year": "2022",
        "igpu": "No"
      },
      {
        "name": "Core i7-13700K",
        "cores": "16",
        "threads": "24",
        "maxfrec": "5.4 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake",
        "process": "Intel 7",
        "l3": "30 MB",
        "year": "2022",
        "igpu": "Intel UHD Graphics 770"
      },
      {
        "name": "Core i5-13600K",
        "cores": "14",
        "threads": "20",
        "maxfrec": "5.1 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake",
        "process": "Intel 7",
        "l3": "24 MB",
        "year": "2022",
        "igpu": "Intel UHD Graphics 770"
      },
      {
        "name": "Core i5-13400",
        "cores": "10",
        "threads": "16",
        "maxfrec": "4.6 GHz",
        "tdp": "65W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake",
        "process": "Intel 7",
        "l3": "20 MB",
        "year": "2023",
        "igpu": "Intel UHD Graphics 730"
      },
      {
        "name": "Core i3-13100",
        "cores": "4",
        "threads": "8",
        "maxfrec": "4.5 GHz",
        "tdp": "60W",
        "socket": "LGA 1700",
        "arq": "Raptor Lake",
        "process": "Intel 7",
        "l3": "12 MB",
        "year": "2023",
        "igpu": "Intel UHD Graphics 730"
      }
    ],
    "alder_lake": [
      {
        "name": "Core i9-12900K",
        "cores": "24",
        "threads": "32",
        "maxfrec": "5.2 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Alder Lake",
        "process": "Intel 7",
        "l3": "30 MB",
        "year": "2021",
        "igpu": "Intel UHD Graphics 770"
      },
      {
        "name": "Core i9-12900KF",
        "cores": "24",
        "threads": "32",
        "maxfrec": "5.2 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Alder Lake",
        "process": "Intel 7",
        "l3": "30 MB",
        "year": "2021",
        "igpu": "No"
      },
      {
        "name": "Core i7-12700K",
        "cores": "12",
        "threads": "20",
        "maxfrec": "5.0 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Alder Lake",
        "process": "Intel 7",
        "l3": "25 MB",
        "year": "2021",
        "igpu": "Intel UHD Graphics 770"
      },
      {
        "name": "Core i5-12600K",
        "cores": "10",
        "threads": "16",
        "maxfrec": "4.9 GHz",
        "tdp": "125W",
        "socket": "LGA 1700",
        "arq": "Alder Lake",
        "process": "Intel 7",
        "l3": "20 MB",
        "year": "2021",
        "igpu": "Intel UHD Graphics 770"
      },
      {
        "name": "Core i5-12400",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.4 GHz",
        "tdp": "65W",
        "socket": "LGA 1700",
        "arq": "Alder Lake",
        "process": "Intel 7",
        "l3": "18 MB",
        "year": "2022",
        "igpu": "Intel UHD Graphics 730"
      },
      {
        "name": "Core i3-12100",
        "cores": "4",
        "threads": "8",
        "maxfrec": "4.3 GHz",
        "tdp": "60W",
        "socket": "LGA 1700",
        "arq": "Alder Lake",
        "process": "Intel 7",
        "l3": "12 MB",
        "year": "2022",
        "igpu": "Intel UHD Graphics 730"
      }
    ],
    "rocket_lake": [
      {
        "name": "Core i9-11900K",
        "cores": "8",
        "threads": "16",
        "maxfrec": "5.3 GHz",
        "tdp": "125W",
        "socket": "LGA 1200",
        "arq": "Rocket Lake",
        "process": "14nm",
        "l3": "16 MB",
        "year": "2021",
        "igpu": "Intel UHD Graphics 750"
      },
      {
        "name": "Core i7-11700K",
        "cores": "8",
        "threads": "16",
        "maxfrec": "5.0 GHz",
        "tdp": "125W",
        "socket": "LGA 1200",
        "arq": "Rocket Lake",
        "process": "14nm",
        "l3": "16 MB",
        "year": "2021",
        "igpu": "Intel UHD Graphics 750"
      },
      {
        "name": "Core i5-11600K",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.9 GHz",
        "tdp": "125W",
        "socket": "LGA 1200",
        "arq": "Rocket Lake",
        "process": "14nm",
        "l3": "12 MB",
        "year": "2021",
        "igpu": "Intel UHD Graphics 750"
      },
      {
        "name": "Core i5-11400",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.4 GHz",
        "tdp": "65W",
        "socket": "LGA 1200",
        "arq": "Rocket Lake",
        "process": "14nm",
        "l3": "12 MB",
        "year": "2021",
        "igpu": "Intel UHD Graphics 730"
      },
      {
        "name": "Core i3-11100",
        "cores": "4",
        "threads": "8",
        "maxfrec": "4.4 GHz",
        "tdp": "60W",
        "socket": "LGA 1200",
        "arq": "Rocket Lake",
        "process": "14nm",
        "l3": "12 MB",
        "year": "2021",
        "igpu": "Intel UHD Graphics 730"
      }
    ],
    "comet_lake": [
      {
        "name": "Core i9-10900K",
        "cores": "10",
        "threads": "20",
        "maxfrec": "5.3 GHz",
        "tdp": "125W",
        "socket": "LGA 1200",
        "arq": "Comet Lake",
        "process": "14nm",
        "l3": "20 MB",
        "year": "2020",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i7-10700K",
        "cores": "8",
        "threads": "16",
        "maxfrec": "5.1 GHz",
        "tdp": "125W",
        "socket": "LGA 1200",
        "arq": "Comet Lake",
        "process": "14nm",
        "l3": "16 MB",
        "year": "2020",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i5-10600K",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.8 GHz",
        "tdp": "125W",
        "socket": "LGA 1200",
        "arq": "Comet Lake",
        "process": "14nm",
        "l3": "12 MB",
        "year": "2020",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i5-10400",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.3 GHz",
        "tdp": "65W",
        "socket": "LGA 1200",
        "arq": "Comet Lake",
        "process": "14nm",
        "l3": "12 MB",
        "year": "2020",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i3-10100",
        "cores": "4",
        "threads": "8",
        "maxfrec": "4.3 GHz",
        "tdp": "65W",
        "socket": "LGA 1200",
        "arq": "Comet Lake",
        "process": "14nm",
        "l3": "6 MB",
        "year": "2020",
        "igpu": "Intel UHD Graphics 630"
      }
    ],
    "coffee_lake_refresh": [
      {
        "name": "Core i9-9900K",
        "cores": "8",
        "threads": "16",
        "maxfrec": "5.0 GHz",
        "tdp": "95W",
        "socket": "LGA 1151",
        "arq": "Coffee Lake Refresh",
        "process": "14nm",
        "l3": "16 MB",
        "year": "2018",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i7-9700K",
        "cores": "8",
        "threads": "8",
        "maxfrec": "4.9 GHz",
        "tdp": "95W",
        "socket": "LGA 1151",
        "arq": "Coffee Lake Refresh",
        "process": "14nm",
        "l3": "12 MB",
        "year": "2018",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i5-9600K",
        "cores": "6",
        "threads": "6",
        "maxfrec": "4.6 GHz",
        "tdp": "95W",
        "socket": "LGA 1151",
        "arq": "Coffee Lake Refresh",
        "process": "14nm",
        "l3": "9 MB",
        "year": "2018",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i5-9400",
        "cores": "6",
        "threads": "6",
        "maxfrec": "4.1 GHz",
        "tdp": "65W",
        "socket": "LGA 1151",
        "arq": "Coffee Lake Refresh",
        "process": "14nm",
        "l3": "9 MB",
        "year": "2019",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i3-9100",
        "cores": "4",
        "threads": "4",
        "maxfrec": "4.2 GHz",
        "tdp": "65W",
        "socket": "LGA 1151",
        "arq": "Coffee Lake Refresh",
        "process": "14nm",
        "l3": "6 MB",
        "year": "2019",
        "igpu": "Intel UHD Graphics 630"
      }
    ],
    "coffee_lake": [
      {
        "name": "Core i7-8700K",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.7 GHz",
        "tdp": "95W",
        "socket": "LGA 1151",
        "arq": "Coffee Lake",
        "process": "14nm",
        "l3": "12 MB",
        "year": "2017",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i7-8700",
        "cores": "6",
        "threads": "12",
        "maxfrec": "4.6 GHz",
        "tdp": "65W",
        "socket": "LGA 1151",
        "arq": "Coffee Lake",
        "process": "14nm",
        "l3": "12 MB",
        "year": "2017",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i5-8600K",
        "cores": "6",
        "threads": "6",
        "maxfrec": "4.3 GHz",
        "tdp": "95W",
        "socket": "LGA 1151",
        "arq": "Coffee Lake",
        "process": "14nm",
        "l3": "9 MB",
        "year": "2017",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i5-8400",
        "cores": "6",
        "threads": "6",
        "maxfrec": "4.0 GHz",
        "tdp": "65W",
        "socket": "LGA 1151",
        "arq": "Coffee Lake",
        "process": "14nm",
        "l3": "9 MB",
        "year": "2017",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i3-8350K",
        "cores": "4",
        "threads": "4",
        "maxfrec": "4.0 GHz",
        "tdp": "91W",
        "socket": "LGA 1151",
        "arq": "Coffee Lake",
        "process": "14nm",
        "l3": "8 MB",
        "year": "2017",
        "igpu": "Intel UHD Graphics 630"
      },
      {
        "name": "Core i3-8100",
        "cores": "4",
        "threads": "4",
        "maxfrec": "3.6 GHz",
        "tdp": "65W",
        "socket": "LGA 1151",
        "arq": "Coffee Lake",
        "process": "14nm",
        "l3": "6 MB",
        "year": "2017",
        "igpu": "Intel UHD Graphics 630"
      }
    ]
  }

  //MOTHERS AMD
  private motherboards_amd = {
    "am5": {
      "x670e": [
        {
          "name": "ROG Crosshair X670E Hero",
          "brand": "ASUS",
          "platform": "AMD",
          "chipset": "X670E",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 1 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2022"
        },
        {
          "name": "MEG X670E ACE",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "X670E",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR5",
          "ram_speed": "6600MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 1 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2022"
        },
        {
          "name": "X670E Aorus Xtreme",
          "brand": "Gigabyte",
          "platform": "AMD",
          "chipset": "X670E",
          "form_factor": "E-ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 1 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2022"
        },
        {
          "name": "X670E Taichi",
          "brand": "ASRock",
          "platform": "AMD",
          "chipset": "X670E",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2022"
        }
      ],
      "x670": [
        {
          "name": "ProArt X670-Creator WiFi",
          "brand": "ASUS",
          "platform": "AMD",
          "chipset": "X670",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 1 x USB 3.2 Gen 1 Type-A, 1 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2022"
        },
        {
          "name": "MPG X670 Carbon WiFi",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "X670",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 1 x USB 3.2 Gen 1 Type-A, 1 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2022"
        },
        {
          "name": "X670 Aorus Master",
          "brand": "Gigabyte",
          "platform": "AMD",
          "chipset": "X670",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 1 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2022"
        },
        {
          "name": "X670E Steel Legend",
          "brand": "ASRock",
          "platform": "AMD",
          "chipset": "X670",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2022"
        }
      ],
      "b650e": [
        {
          "name": "ROG Strix B650E-F Gaming WiFi",
          "brand": "ASUS",
          "platform": "AMD",
          "chipset": "B650E",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 1 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2023"
        },
        {
          "name": "MPG B650E Carbon WiFi",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "B650E",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 1 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2023"
        },
        {
          "name": "B650E Aorus Master",
          "brand": "Gigabyte",
          "platform": "AMD",
          "chipset": "B650E",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 1 x USB 3.2 Gen 1 Type-A, 1 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2023"
        },
        {
          "name": "B650E PG Riptide",
          "brand": "ASRock",
          "platform": "AMD",
          "chipset": "B650E",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 5.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 1 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 10G, WiFi 6E",
          "expansion_slots": "2 x PCIe 5.0 x16",
          "m2_slots": "4 x M.2 PCIe 4.0",
          "year": "2023"
        }
      ],
      "b650": [
        {
          "name": "TUF Gaming B650-Plus WiFi",
          "brand": "ASUS",
          "platform": "AMD",
          "chipset": "B650",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 2.5G, WiFi 6E",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "3 x M.2 PCIe 4.0",
          "year": "2023"
        },
        {
          "name": "MAG B650 Tomahawk WiFi",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "B650",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 1 x USB 3.2 Gen 1 Type-A, 1 x USB 2.0",
          "network": "Ethernet 2.5G, WiFi 6E",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "3 x M.2 PCIe 4.0",
          "year": "2023"
        },
        {
          "name": "B650 Aorus Elite AX",
          "brand": "Gigabyte",
          "platform": "AMD",
          "chipset": "B650",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 1 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 2.5G, WiFi 6E",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "3 x M.2 PCIe 4.0",
          "year": "2023"
        },
        {
          "name": "B650 Pro RS",
          "brand": "ASRock",
          "platform": "AMD",
          "chipset": "B650",
          "form_factor": "ATX",
          "socket": "AM5",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR5",
          "ram_speed": "6400MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "2 x SATA 6Gb/s",
          "usb_ports": "1 x USB 4.0 Type-C, 2 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 1 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 2.5G, WiFi 6E",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "3 x M.2 PCIe 4.0",
          "year": "2023"
        }
      ]
    },
    "am4": {
      "x570": [
        {
          "name": "ROG Crosshair VIII Hero",
          "brand": "ASUS",
          "platform": "AMD",
          "chipset": "X570",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR4",
          "ram_speed": "4400MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "8 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 2x2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 4 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G, WiFi 6",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "2 x M.2 PCIe 4.0",
          "year": "2019"
        },
        {
          "name": "MEG X570 Unify",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "X570",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR4",
          "ram_speed": "4800MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 2x2 Type-C, 3 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 2.5G",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "3 x M.2 PCIe 4.0",
          "year": "2019"
        },
        {
          "name": "X570 Aorus Master",
          "brand": "Gigabyte",
          "platform": "AMD",
          "chipset": "X570",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR4",
          "ram_speed": "4400MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 2x2 Type-C, 4 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 2.5G",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "3 x M.2 PCIe 4.0",
          "year": "2019"
        },
        {
          "name": "X570 Taichi",
          "brand": "ASRock",
          "platform": "AMD",
          "chipset": "X570",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR4",
          "ram_speed": "4533MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "8 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 2x2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 4 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 2.5G",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "3 x M.2 PCIe 4.0",
          "year": "2019"
        }
      ],
      "b550": [
        {
          "name": "TUF Gaming B550-Plus",
          "brand": "ASUS",
          "platform": "AMD",
          "chipset": "B550",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR4",
          "ram_speed": "4400MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 2x2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "2 x M.2 PCIe 4.0",
          "year": "2020"
        },
        {
          "name": "MAG B550 Tomahawk",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "B550",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR4",
          "ram_speed": "4400MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 2x2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "2 x M.2 PCIe 4.0",
          "year": "2020"
        },
        {
          "name": "B550 Aorus Pro AC",
          "brand": "Gigabyte",
          "platform": "AMD",
          "chipset": "B550",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR4",
          "ram_speed": "4600MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 2x2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G, WiFi 5",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "2 x M.2 PCIe 4.0",
          "year": "2020"
        },
        {
          "name": "B550 Steel Legend",
          "brand": "ASRock",
          "platform": "AMD",
          "chipset": "B550",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "128GB",
          "supported_ram": "DDR4",
          "ram_speed": "4733MHz",
          "pci_slots": "2 x PCIe 4.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 2x2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "2 x PCIe 4.0 x16",
          "m2_slots": "2 x M.2 PCIe 4.0",
          "year": "2020"
        }
      ],
      "a520": [
        {
          "name": "Prime A520M-A",
          "brand": "ASUS",
          "platform": "AMD",
          "chipset": "A520",
          "form_factor": "Micro ATX",
          "socket": "AM4",
          "ram_slots": "2",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "4400MHz",
          "pci_slots": "1 x PCIe 3.0 x16",
          "storage_interfaces": "4 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "1 x PCIe 3.0 x16",
          "m2_slots": "1 x M.2 PCIe 3.0",
          "year": "2020"
        },
        {
          "name": "A520M Pro",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "A520",
          "form_factor": "Micro ATX",
          "socket": "AM4",
          "ram_slots": "2",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "4400MHz",
          "pci_slots": "1 x PCIe 3.0 x16",
          "storage_interfaces": "4 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "1 x PCIe 3.0 x16",
          "m2_slots": "1 x M.2 PCIe 3.0",
          "year": "2020"
        },
        {
          "name": "A520M Aorus Elite",
          "brand": "Gigabyte",
          "platform": "AMD",
          "chipset": "A520",
          "form_factor": "Micro ATX",
          "socket": "AM4",
          "ram_slots": "2",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "4600MHz",
          "pci_slots": "1 x PCIe 3.0 x16",
          "storage_interfaces": "4 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "1 x PCIe 3.0 x16",
          "m2_slots": "1 x M.2 PCIe 3.0",
          "year": "2020"
        },
        {
          "name": "A520M-HDV",
          "brand": "ASRock",
          "platform": "AMD",
          "chipset": "A520",
          "form_factor": "Micro ATX",
          "socket": "AM4",
          "ram_slots": "2",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "4400MHz",
          "pci_slots": "1 x PCIe 3.0 x16",
          "storage_interfaces": "4 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.2 Gen 1 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "1 x PCIe 3.0 x16",
          "m2_slots": "1 x M.2 PCIe 3.0",
          "year": "2020"
        }
      ],
      "x470": [
        {
          "name": "ROG Crosshair VII Hero",
          "brand": "ASUS",
          "platform": "AMD",
          "chipset": "X470",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "3600MHz",
          "pci_slots": "2 x PCIe 3.0 x16",
          "storage_interfaces": "8 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 2 x USB 3.1 Gen 2 Type-A, 2 x USB 3.0 Type-A, 4 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "2 x PCIe 3.0 x16",
          "m2_slots": "2 x M.2 PCIe 3.0",
          "year": "2018"
        },
        {
          "name": "X470 Gaming Pro Carbon",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "X470",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "4133MHz",
          "pci_slots": "2 x PCIe 3.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 2 x USB 3.1 Gen 2 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "2 x PCIe 3.0 x16",
          "m2_slots": "2 x M.2 PCIe 3.0",
          "year": "2018"
        },
        {
          "name": "X470 Aorus Gaming 7 WiFi",
          "brand": "Gigabyte",
          "platform": "AMD",
          "chipset": "X470",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "4400MHz",
          "pci_slots": "2 x PCIe 3.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 2 x USB 3.1 Gen 2 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G, WiFi 5",
          "expansion_slots": "2 x PCIe 3.0 x16",
          "m2_slots": "2 x M.2 PCIe 3.0",
          "year": "2018"
        },
        {
          "name": "X470 Taichi",
          "brand": "ASRock",
          "platform": "AMD",
          "chipset": "X470",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "3466MHz",
          "pci_slots": "2 x PCIe 3.0 x16",
          "storage_interfaces": "8 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 2 x USB 3.1 Gen 2 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "2 x PCIe 3.0 x16",
          "m2_slots": "2 x M.2 PCIe 3.0",
          "year": "2018"
        }
      ],
      "b450": [
        {
          "name": "ROG Strix B450-F Gaming",
          "brand": "ASUS",
          "platform": "AMD",
          "chipset": "B450",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "3200MHz",
          "pci_slots": "1 x PCIe 3.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 2 x USB 3.1 Gen 2 Type-A, 4 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "1 x PCIe 3.0 x16",
          "m2_slots": "2 x M.2 PCIe 3.0",
          "year": "2018"
        },
        {
          "name": "B450 Tomahawk",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "B450",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "3600MHz",
          "pci_slots": "2 x PCIe 3.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 2 x USB 3.1 Gen 2 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "2 x PCIe 3.0 x16",
          "m2_slots": "2 x M.2 PCIe 3.0",
          "year": "2018"
        },
        {
          "name": "B450 Aorus Pro WiFi",
          "brand": "Gigabyte",
          "platform": "AMD",
          "chipset": "B450",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "3200MHz",
          "pci_slots": "2 x PCIe 3.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 2 x USB 3.1 Gen 2 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G, WiFi 5",
          "expansion_slots": "2 x PCIe 3.0 x16",
          "m2_slots": "2 x M.2 PCIe 3.0",
          "year": "2018"
        },
        {
          "name": "B450 Steel Legend",
          "brand": "ASRock",
          "platform": "AMD",
          "chipset": "B450",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "3533MHz",
          "pci_slots": "2 x PCIe 3.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 2 x USB 3.1 Gen 2 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "2 x PCIe 3.0 x16",
          "m2_slots": "2 x M.2 PCIe 3.0",
          "year": "2018"
        }
      ],
      "b350": [
        {
          "name": "B350 Gaming Pro Carbon",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "B350",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "3200MHz",
          "pci_slots": "2 x PCIe 3.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 2 x USB 3.1 Gen 2 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "2 x PCIe 3.0 x16",
          "m2_slots": "2 x M.2 PCIe 3.0",
          "year": "2017"
        },
        {
          "name": "B350 Tomahawk",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "B350",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "3200MHz",
          "pci_slots": "2 x PCIe 3.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 2 x USB 3.1 Gen 2 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "2 x PCIe 3.0 x16",
          "m2_slots": "2 x M.2 PCIe 3.0",
          "year": "2017"
        },
        {
          "name": "B350 Aorus Gaming 3",
          "brand": "Gigabyte",
          "platform": "AMD",
          "chipset": "B350",
          "form_factor": "ATX",
          "socket": "AM4",
          "ram_slots": "4",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "3200MHz",
          "pci_slots": "2 x PCIe 3.0 x16",
          "storage_interfaces": "6 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 2 x USB 3.1 Gen 2 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "2 x PCIe 3.0 x16",
          "m2_slots": "2 x M.2 PCIe 3.0",
          "year": "2017"
        },
        {
          "name": "B350M Pro4",
          "brand": "ASRock",
          "platform": "AMD",
          "chipset": "B350",
          "form_factor": "Micro ATX",
          "socket": "AM4",
          "ram_slots": "2",
          "max_ram": "64GB",
          "supported_ram": "DDR4",
          "ram_speed": "3200MHz",
          "pci_slots": "1 x PCIe 3.0 x16",
          "storage_interfaces": "4 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 2 Type-C, 1 x USB 3.1 Gen 1 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "1 x PCIe 3.0 x16",
          "m2_slots": "1 x M.2 PCIe 3.0",
          "year": "2017"
        }
      ],
      "a320": [
        {
          "name": "Prime A320M-K",
          "brand": "ASUS",
          "platform": "AMD",
          "chipset": "A320",
          "form_factor": "Micro ATX",
          "socket": "AM4",
          "ram_slots": "2",
          "max_ram": "32GB",
          "supported_ram": "DDR4",
          "ram_speed": "2666MHz",
          "pci_slots": "1 x PCIe 3.0 x16",
          "storage_interfaces": "4 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 1 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "1 x PCIe 3.0 x16",
          "m2_slots": "1 x M.2 PCIe 3.0",
          "year": "2017"
        },
        {
          "name": "A320M Pro-VH Plus",
          "brand": "MSI",
          "platform": "AMD",
          "chipset": "A320",
          "form_factor": "Micro ATX",
          "socket": "AM4",
          "ram_slots": "2",
          "max_ram": "32GB",
          "supported_ram": "DDR4",
          "ram_speed": "2666MHz",
          "pci_slots": "1 x PCIe 3.0 x16",
          "storage_interfaces": "4 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 1 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "1 x PCIe 3.0 x16",
          "m2_slots": "1 x M.2 PCIe 3.0",
          "year": "2017"
        },
        {
          "name": "GA-A320M-S2H",
          "brand": "Gigabyte",
          "platform": "AMD",
          "chipset": "A320",
          "form_factor": "Micro ATX",
          "socket": "AM4",
          "ram_slots": "2",
          "max_ram": "32GB",
          "supported_ram": "DDR4",
          "ram_speed": "2666MHz",
          "pci_slots": "1 x PCIe 3.0 x16",
          "storage_interfaces": "4 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 1 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "1 x PCIe 3.0 x16",
          "m2_slots": "1 x M.2 PCIe 3.0",
          "year": "2017"
        },
        {
          "name": "A320M-HDV",
          "brand": "ASRock",
          "platform": "AMD",
          "chipset": "A320",
          "form_factor": "Micro ATX",
          "socket": "AM4",
          "ram_slots": "2",
          "max_ram": "32GB",
          "supported_ram": "DDR4",
          "ram_speed": "2666MHz",
          "pci_slots": "1 x PCIe 3.0 x16",
          "storage_interfaces": "4 x SATA 6Gb/s",
          "usb_ports": "1 x USB 3.1 Gen 1 Type-A, 2 x USB 3.0 Type-A, 2 x USB 2.0",
          "network": "Ethernet 1G",
          "expansion_slots": "1 x PCIe 3.0 x16",
          "m2_slots": "1 x M.2 PCIe 3.0",
          "year": "2017"
        }
      ]
    }
  }


// -------- Methods: search, filters, etc -------------

  searchCpu(filterDto: FilterCpuDto) {
    const { brand, name } = filterDto;
    const architectures = ['zen', 'zen+', 'zen2', 'zen3', 'zen4'];
    let filteredCpus = []
    for (const a of architectures) {
      if (this[brand][a]) {
        filteredCpus = filteredCpus.concat(this[brand][a]);
      }
    }
    filteredCpus = filteredCpus.filter(cpu => cpu.name.toLowerCase().includes(name.toLowerCase()));
    return filteredCpus;
  }
  filterCpuByArq(filterDto: FilterCpuDto) {
    const { brand, arq } = filterDto;
    return this[brand][arq];
  }
  filterCpuByCores(filterDto: FilterCpuDto) {
    const { brand, cores } = filterDto;
    const architectures = ['zen', 'zen+', 'zen2', 'zen3', 'zen4'];
    let filteredCpus = []
    for (const a of architectures) {
      if (this[brand][a]) {
        filteredCpus = filteredCpus.concat(this[brand][a]);
      }
    }
    filteredCpus = filteredCpus.filter(cpu => cpu.cores === cores);
    return filteredCpus;
  }
  filterCpuByThreads(filterDto: FilterCpuDto) {
    const { brand, threads } = filterDto;
    const architectures = ['zen', 'zen+', 'zen2', 'zen3', 'zen4'];
    let filteredCpus = []
    for (const a of architectures) {
      if (this[brand][a]) {
        filteredCpus = filteredCpus.concat(this[brand][a]);
      }
    }
    filteredCpus = filteredCpus.filter(cpu => cpu.threads === threads);
    return filteredCpus;
  }
  filterCpuBySocket(filterDto: FilterCpuDto) {
    const { brand, socket } = filterDto;
    const architectures = ['zen', 'zen+', 'zen2', 'zen3', 'zen4'];
    let filteredCpus = []
    for (const a of architectures) {
      if (this[brand][a]) {
        filteredCpus = filteredCpus.concat(this[brand][a]);
      }
    }
    filteredCpus = filteredCpus.filter(cpu => cpu.socket === socket);
    return filteredCpus;
  }
  filterCpuByIgpu(filterDto: FilterCpuDto) {
    const { brand, igpu } = filterDto;
    const architectures = ['zen', 'zen+', 'zen2', 'zen3', 'zen4'];
    let filteredCpus = []
    for (const a of architectures) {
      if (this[brand][a]) {
        filteredCpus = filteredCpus.concat(this[brand][a]);
      }
    }
    filteredCpus = filteredCpus.filter(cpu => cpu.igpu === igpu);
    return filteredCpus;
  }

  // ----------------- testing methods -----------------------
  find2p(p1: string, p2: string): string {
    return this[p1][p2];
  }
  find1p(p1: string): string {
    return this[p1];
  }
  find4p(p1: string, p2: string, p3: string, p4: string): string {
    return this[p1][p2][p3].filter(obj => obj.tdp == p4)
  }
  wtf() {
    return "que buscas acá?";
  }
  //-----------------------------------------------------------


  /* blablabla(filterDto: FilterCpuDto) {
    const { brand, name, cores, threads, maxfrec, tdp, socket, arq, process, l3, year, igpu } = filterDto;
 
    let filteredCpus = this[brand][arq];
 
    
      if (name) {
        filteredCpus = filteredCpus.filter(cpu => cpu.name === name);
      }
      if (cores) {
        filteredCpus = filteredCpus.filter(cpu => cpu.cores === cores);
      }
      if (threads) {
        filteredCpus = filteredCpus.filter(cpu => cpu.threads === threads);
      }
      if (maxfrec) {
        filteredCpus = filteredCpus.filter(cpu => cpu.maxfrec === maxfrec);
      }
      if (tdp) {
        filteredCpus = filteredCpus.filter(cpu => cpu.tdp === tdp);
      }
      if (socket) {
        filteredCpus = filteredCpus.filter(cpu => cpu.socket === socket);
      }
      if (arq) {
        filteredCpus = filteredCpus.filter(cpu => cpu.arq === arq);
      }
      if (process) {
        filteredCpus = filteredCpus.filter(cpu => cpu.process === process);
      }
      if (l3) {
        filteredCpus = filteredCpus.filter(cpu => cpu.l3 === l3);
      }
      if (year) {
        filteredCpus = filteredCpus.filter(cpu => cpu.year === year);
      }
      if (igpu) {
        filteredCpus = filteredCpus.filter(cpu => cpu.igpu === igpu);
      }
 
      return filteredCpus;
    
  }
   */

}