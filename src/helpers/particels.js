import hospital from '../assets/images/hospital.png';
import wash from '../assets/images/wash.png';
import thermo from '../assets/images/thermo.png';
import cough from '../assets/images/cough.png';
import m19 from '../assets/images/19.png';
import mask from '../assets/images/mask.png';
import social from '../assets/images/social.png';

const particlesConfig = {
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "speed": 1,
            "out_mode": "out"
        },
        "shape": {
            "type": [
                "image",
                "circle"
            ],
            "image": [
                {
                    "src": m19,
                    "height": 20,
                    "width": 23
                },
                {
                    "src": mask,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": hospital,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": thermo,
                    "height": 20,
                    "width": 20
                },  
                {
                    "src": wash,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": cough,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": social,
                    "height": 20,
                    "width": 20
                }
            ]
        },
        "color": {
            "value": "#CCC"
        },
        "size": {
            "value": 50,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 10,
                "sync": false
            }
        }
    },
    "retina_detect": false
};

export default particlesConfig;