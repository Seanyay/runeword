import { Slots } from "../enums/ItemTypes";
import { Runes } from "../enums/Runes";
import { IRune } from "../interfaces";
// Rune image assets
import El from '../assets/runes/el.png';
import Eld from '../assets/runes/eld.png';
import Tir from '../assets/runes/tir.png';
import Nef from '../assets/runes/nef.png';
import Eth from '../assets/runes/eth.png';
import Ith from '../assets/runes/ith.png';
import Tal from '../assets/runes/tal.png';
import Ral from '../assets/runes/ral.png';
import Ort from '../assets/runes/ort.png';
import Thul from '../assets/runes/thul.png';
import Amn from '../assets/runes/amn.png';
import Sol from '../assets/runes/sol.png';
import Shael from '../assets/runes/shael.png';
import Dol from '../assets/runes/dol.png';
import Hel from '../assets/runes/hel.png';
import Io from '../assets/runes/io.png';
import Lum from '../assets/runes/lum.png';
import Ko from '../assets/runes/ko.png';
import Fal from '../assets/runes/fal.png';
import Lem from '../assets/runes/lem.png';
import Pul from '../assets/runes/pul.png';
import Um from '../assets/runes/um.png';
import Mal from '../assets/runes/mal.png';
import Ist from '../assets/runes/ist.png';
import Gul from '../assets/runes/gul.png';
import Vex from '../assets/runes/vex.png';
import Ohm from '../assets/runes/ohm.png';
import Lo from '../assets/runes/lo.png';
import Sur from '../assets/runes/sur.png';
import Ber from '../assets/runes/ber.png';
import Jah from '../assets/runes/jah.png';
import Cham from '../assets/runes/cham.png';
import Zod from '../assets/runes/zod.png';

const { WEAPON, ARMOR, HELM, SHIELD } = Slots;

export const runesById: Map<Runes, IRune> = new Map([
  [Runes.EL, {
    id: Runes.EL,
    name: "El",
    image: El,
    level: 11,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "+50 to Attack Rating",
          "+1 Light Radius"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "+15 Defense",
          "+1 Light Radius"
        ]
      }
    ]
  }],
  [Runes.ELD, {
    id: Runes.ELD,
    name: "Eld",
    image: Eld,
    level: 11,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "+75% Damage to Undead",
          "+50 Attack Rating Against Undead"
        ]
      },
      {
        slots: [ARMOR, HELM],
        attributes: [
          "15% Slower Stamina Drain"
        ]
      },
      {
        slots: SHIELD,
        attributes: [
          "7% Increase Chance of Blocking"
        ]
      }
    ]
  }],
  [Runes.TIR, {
    id: Runes.TIR,
    name: "Tir",
    image: Tir,
    level: 13,
    stats: [
      {
        slots: [WEAPON, ARMOR, HELM, SHIELD],
        attributes: [
          "+2 to Mana After Each Kill"
        ]
      }
    ]
  }],
  [Runes.NEF, {
    id: Runes.NEF,
    name: "Nef",
    image: Nef,
    level: 13,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "Knockback"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "+30 Defense vs. Missile"
        ]
      }
    ]
  }],
  [Runes.ETH, {
    id: Runes.ETH,
    name: "Eth",
    image: Eth,
    level: 15,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "-25% to Target Defense"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "Regenerate Mana 15%"
        ]
      }
    ]
  }],
  [Runes.ITH, {
    id: Runes.ITH,
    name: "Ith",
    image: Ith,
    level: 15,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "+9 to Maximum Damage"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "15% Damage Taken Goes to Mana"
        ]
      }
    ]
  }],
  [Runes.TAL, {
    id: Runes.TAL,
    name: "Tal",
    image: Tal,
    level: 17,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "+75 Poison Damage Over 5 Seconds"
        ]
      },
      {
        slots: [ARMOR, HELM],
        attributes: [
          "Poison Resist 30%"
        ]
      },
      {
        slots: SHIELD,
        attributes: [
          "Poison Resust 35%"
        ]
      }
    ]
  }],
  [Runes.RAL, {
    id: Runes.RAL,
    name: "Ral",
    image: Ral,
    level: 19,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "Adds 5-30 Fire Damage"
        ]
      },
      {
        slots: [ARMOR, HELM],
        attributes: [
          "Fire Resist 30%"
        ]
      },
      {
        slots: SHIELD,
        attributes: [
          "Fire Resist 35%"
        ]
      }
    ]
  }],
  [Runes.ORT, {
    id: Runes.ORT,
    name: "Ort",
    image: Ort,
    level: 21,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "Adds 1-50 Lightning Damage"
        ]
      },
      {
        slots: [ARMOR, HELM],
        attributes: [
          "Lightning Resist 30%"
        ]
      },
      {
        slots: SHIELD,
        attributes: [
          "Lightning Resist 35%"
        ]
      }
    ]
  }],
  [Runes.THUL, {
    id: Runes.THUL,
    name: "Thul",
    image: Thul,
    level: 23,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "Adds 3-14 Cold Damage - 3 Second Duration"
        ]
      },
      {
        slots: [ARMOR, HELM],
        attributes: [
          "Cold Resist 30%"
        ]
      },
      {
        slots: SHIELD,
        attributes: [
          "Cold Resist 35%"
        ]
      }
    ]
  }],
  [Runes.AMN, {
    id: Runes.AMN,
    name: "Amn",
    image: Amn,
    level: 25,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "7% Life Stolen Per Hit"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "Attacker Takes Damage of 14"
        ]
      }
    ]
  }],
  [Runes.SOL, {
    id: Runes.SOL,
    name: "Sol",
    image: Sol,
    level: 27,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "+9 to Minimum Damage"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "Damage Reduced By 7"
        ]
      }
    ]
  }],
  [Runes.SHAEL, {
    id: Runes.SHAEL,
    name: "Shael",
    image: Shael,
    level: 29,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "20% Increased Attack Speed"
        ]
      },
      {
        slots: [ARMOR, HELM],
        attributes: [
          "20% Faster Hit Recovery"
        ]
      },
      {
        slots: SHIELD,
        attributes: [
          "20% Faster Block Rate"
        ]
      },
    ]
  }],
  [Runes.DOL, {
    id: Runes.DOL,
    name: "Dol",
    image: Dol,
    level: 31,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "Hit Causes Monster to Flee 25%"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "Replenish Life +7"
        ]
      }
    ]
  }],
  [Runes.HEL, {
    id: Runes.HEL,
    name: "Hel",
    image: Hel,
    level: undefined,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "Requirements -20%"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "Requirements -15%"
        ]
      }
    ]
  }],
  [Runes.IO, {
    id: Runes.IO,
    name: "Io",
    image: Io,
    level: 35,
    stats: [
      {
        slots: [WEAPON, ARMOR, HELM, SHIELD],
        attributes: [
          "+10 to Vitality"
        ]
      }
    ]
  }],
  [Runes.LUM, {
    id: Runes.LUM,
    name: "Lum",
    image: Lum,
    level: 37,
    stats: [
      {
        slots: [WEAPON, ARMOR, HELM, SHIELD],
        attributes: [
          "+10 to Energy"
        ]
      }
    ]
  }],
  [Runes.KO, {
    id: Runes.KO,
    name: "Ko",
    image: Ko,
    level: 39,
    stats: [
      {
        slots: [WEAPON, ARMOR, HELM, SHIELD],
        attributes: [
          "+10 to Dexterity"
        ]
      }
    ]
  }],
  [Runes.FAL, {
    id: Runes.FAL,
    name: "Fal",
    image: Fal,
    level: 41,
    stats: [
      {
        slots: [WEAPON, ARMOR, HELM, SHIELD],
        attributes: [
          "+10 to Strength"
        ]
      }
    ]
  }],
  [Runes.LEM, {
    id: Runes.LEM,
    name: "Lem",
    image: Lem,
    level: 43,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "75% Extra Gold from Monsters"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "50% Extra Gold from Monsters"
        ]
      }
    ]
  }],
  [Runes.PUL, {
    id: Runes.PUL,
    name: "Pul",
    image: Pul,
    level: 45,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "+75% Damage to Demons",
          "+100 Attack Rating Against Demons"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "+30% Enhanced Defense"
        ]
      }
    ]
  }],
  [Runes.UM, {
    id: Runes.UM,
    name: "Um",
    image: Um,
    level: 47,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "25% Chance of Open Wounds"
        ]
      },
      {
        slots: [ARMOR, HELM],
        attributes: [
          "All Resistances +15"
        ]
      },
      {
        slots: SHIELD,
        attributes: [
          "All Resistances +22"
        ]
      }
    ]
  }],
  [Runes.MAL, {
    id: Runes.MAL,
    name: "Mal",
    image: Mal,
    level: 49,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "Prevent Monster Heal"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "Magic Damage Reduced By 7"
        ]
      }
    ]
  }],
  [Runes.IST, {
    id: Runes.IST,
    name: "Ist",
    image: Ist,
    level: 51,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "30% Better Chance of Getting Magic Items"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "25% Better Chance of Getting Magic Items"
        ]
      }
    ]
  }],
  [Runes.GUL, {
    id: Runes.GUL,
    name: "Gul",
    image: Gul,
    level: 53,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "20% Bonus to Attack Rating"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "5% to Maximum Poison Resist"
        ]
      }
    ]
  }],
  [Runes.VEX, {
    id: Runes.VEX,
    name: "Vex",
    image: Vex,
    level: 55,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "7% Mana Stolen Per Hit"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "5% to Maximum Fire Resist"
        ]
      }
    ]
  }],
  [Runes.OHM, {
    id: Runes.OHM,
    name: "Ohm",
    image: Ohm,
    level: 57,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "+50% Enhanced Damage"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "5% to Maximum Cold Resist"
        ]
      }
    ]
  }],
  [Runes.LO, {
    id: Runes.LO,
    name: "Lo",
    image: Lo,
    level: 59,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "+20% Deadly Strike"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "5% to Maximum Lightning Resist"
        ]
      }
    ]
  }],
  [Runes.SUR, {
    id: Runes.SUR,
    name: "Sur",
    image: Sur,
    level: 61,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "Hit Blinds Target"
        ]
      },
      {
        slots: [ARMOR, HELM],
        attributes: [
          "Maximum Mana 5%"
        ]
      },
      {
        slots: SHIELD,
        attributes: [
          "+50 to Mana"
        ]
      }
    ]
  }],
  [Runes.BER, {
    id: Runes.BER,
    name: "Ber",
    image: Ber,
    level: 63,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "20% Chance of Crushing Blow"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "Damage Reduced by 8%"
        ]
      }
    ]
  }],
  [Runes.JAH, {
    id: Runes.JAH,
    name: "Jah",
    image: Jah,
    level: 65,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "Ignore Target's Defense"
        ]
      },
      {
        slots: [ARMOR, HELM],
        attributes: [
          "Increase Maximum Life 5%"
        ]
      },
      {
        slots: SHIELD,
        attributes: [
          "+50 Life"
        ]
      }
    ]
  }],
  [Runes.CHAM, {
    id: Runes.CHAM,
    name: "Cham",
    image: Cham,
    level: 67,
    stats: [
      {
        slots: WEAPON,
        attributes: [
          "Freeze Target +3"
        ]
      },
      {
        slots: [ARMOR, HELM, SHIELD],
        attributes: [
          "Cannot Be Frozen"
        ]
      }
    ]
  }],
  [Runes.ZOD, {
    id: Runes.ZOD,
    name: "Zod",
    image: Zod,
    level: 69,
    stats: [
      {
        slots: [WEAPON, ARMOR, HELM, SHIELD],
        attributes: [
          "Indestructible"
        ]
      }
    ]
  }]
]);