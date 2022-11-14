const { Comments } = require('../models');

const commentdata = [

    {
        "comment": "Multi-layered grid-enabled middleware",
        "user_id": 61,
        "blog_id": 117
    },
    {
        "comment": "Robust local data-warehouse",
        "user_id": 29,
        "blog_id": 75
    },
    {
        "comment": "Object-based responsive encoding",
        "user_id": 27,
        "blog_id": 157
    },
    {
        "comment": "Function-based 3rd generation adapter",
        "user_id": 70,
        "blog_id": 68
    },
    {
        "comment": "Organized tangible knowledge base",
        "user_id": 35,
        "blog_id": 74
    },
    {
        "comment": "Customizable directional collaboration",
        "user_id": 85,
        "blog_id": 159
    },
    {
        "comment": "Diverse tertiary solution",
        "user_id": 77,
        "blog_id": 22
    },
    {
        "comment": "Secured systematic paradigm",
        "user_id": 1,
        "blog_id": 51
    },
    {
        "comment": "Exclusive heuristic approach",
        "user_id": 4,
        "blog_id": 198
    },
    {
        "comment": "Operative discrete help-desk",
        "user_id": 76,
        "blog_id": 17
    },
    {
        "comment": "Mandatory holistic matrix",
        "user_id": 55,
        "blog_id": 115
    },
    {
        "comment": "Function-based user-facing project",
        "user_id": 20,
        "blog_id": 85
    },
    {
        "comment": "Balanced empowering core",
        "user_id": 17,
        "blog_id": 49
    },
    {
        "comment": "User-centric needs-based framework",
        "user_id": 41,
        "blog_id": 124
    },
    {
        "comment": "Focused coherent definition",
        "user_id": 48,
        "blog_id": 77
    },
    {
        "comment": "Business-focused asymmetric challenge",
        "user_id": 97,
        "blog_id": 88
    },
    {
        "comment": "Switchable logistical orchestration",
        "user_id": 69,
        "blog_id": 33
    },
    {
        "comment": "Realigned hybrid algorithm",
        "user_id": 87,
        "blog_id": 106
    },
    {
        "comment": "Proactive foreground archive",
        "user_id": 39,
        "blog_id": 1
    },
    {
        "comment": "Integrated real-time attitude",
        "user_id": 57,
        "blog_id": 73
    },
    {
        "comment": "Business-focused empowering model",
        "user_id": 69,
        "blog_id": 74
    },
    {
        "comment": "Cross-group high-level functionalities",
        "user_id": 29,
        "blog_id": 87
    },
    {
        "comment": "Balanced client-server initiative",
        "user_id": 37,
        "blog_id": 19
    },
    {
        "comment": "Total executive service-desk",
        "user_id": 78,
        "blog_id": 193
    },
    {
        "comment": "Reduced context-sensitive challenge",
        "user_id": 35,
        "blog_id": 97
    },
    {
        "comment": "Centralized high-level encryption",
        "user_id": 63,
        "blog_id": 148
    },
    {
        "comment": "Public-key client-server moderator",
        "user_id": 94,
        "blog_id": 156
    },
    {
        "comment": "Balanced clear-thinking knowledge base",
        "user_id": 72,
        "blog_id": 75
    },
    {
        "comment": "Fully-configurable zero defect pricing structure",
        "user_id": 27,
        "blog_id": 60
    },
    {
        "comment": "Self-enabling human-resource capacity",
        "user_id": 58,
        "blog_id": 182
    },
    {
        "comment": "Streamlined directional array",
        "user_id": 99,
        "blog_id": 57
    },
    {
        "comment": "Monitored disintermediate array",
        "user_id": 41,
        "blog_id": 185
    },
    {
        "comment": "Team-oriented reciprocal website",
        "user_id": 91,
        "blog_id": 27
    },
    {
        "comment": "Centralized human-resource parallelism",
        "user_id": 24,
        "blog_id": 162
    },
    {
        "comment": "Synergized 5th generation task-force",
        "user_id": 77,
        "blog_id": 174
    },
    {
        "comment": "Total static Graphic Interface",
        "user_id": 2,
        "blog_id": 63
    },
    {
        "comment": "Organized eco-centric budgetary management",
        "user_id": 14,
        "blog_id": 38
    },
    {
        "comment": "Synergized national superstructure",
        "user_id": 41,
        "blog_id": 55
    },
    {
        "comment": "Upgradable secondary algorithm",
        "user_id": 72,
        "blog_id": 124
    },
    {
        "comment": "Balanced multimedia alliance",
        "user_id": 41,
        "blog_id": 178
    },
    {
        "comment": "Public-key encompassing circuit",
        "user_id": 76,
        "blog_id": 137
    },
    {
        "comment": "User-centric motivating adapter",
        "user_id": 60,
        "blog_id": 49
    },
    {
        "comment": "Distributed stable software",
        "user_id": 32,
        "blog_id": 62
    },
    {
        "comment": "Persistent human-resource contingency",
        "user_id": 73,
        "blog_id": 103
    },
    {
        "comment": "Re-engineered uniform focus group",
        "user_id": 90,
        "blog_id": 30
    },
    {
        "comment": "Switchable full-range budgetary management",
        "user_id": 74,
        "blog_id": 143
    },
    {
        "comment": "Optional optimal migration",
        "user_id": 61,
        "blog_id": 49
    },
    {
        "comment": "Optional explicit application",
        "user_id": 61,
        "blog_id": 16
    },
    {
        "comment": "Function-based upward-trending system engine",
        "user_id": 8,
        "blog_id": 124
    },
    {
        "comment": "Universal exuding complexity",
        "user_id": 68,
        "blog_id": 65
    },
    {
        "comment": "Multi-lateral composite system engine",
        "user_id": 38,
        "blog_id": 44
    },
    {
        "comment": "Diverse explicit infrastructure",
        "user_id": 30,
        "blog_id": 166
    },
    {
        "comment": "Customizable eco-centric methodology",
        "user_id": 99,
        "blog_id": 198
    },
    {
        "comment": "Ergonomic discrete focus group",
        "user_id": 65,
        "blog_id": 188
    },
    {
        "comment": "Right-sized zero defect encryption",
        "user_id": 67,
        "blog_id": 19
    },
    {
        "comment": "Down-sized heuristic orchestration",
        "user_id": 91,
        "blog_id": 43
    },
    {
        "comment": "Re-contextualized fault-tolerant open architecture",
        "user_id": 24,
        "blog_id": 26
    },
    {
        "comment": "Multi-layered system-worthy forecast",
        "user_id": 6,
        "blog_id": 138
    },
    {
        "comment": "Triple-buffered impactful model",
        "user_id": 36,
        "blog_id": 19
    },
    {
        "comment": "Multi-channelled attitude-oriented time-frame",
        "user_id": 97,
        "blog_id": 97
    },
    {
        "comment": "Quality-focused mission-critical initiative",
        "user_id": 45,
        "blog_id": 24
    },
    {
        "comment": "Centralized zero administration attitude",
        "user_id": 24,
        "blog_id": 104
    },
    {
        "comment": "Networked contextually-based local area network",
        "user_id": 53,
        "blog_id": 36
    },
    {
        "comment": "Synergistic radical focus group",
        "user_id": 12,
        "blog_id": 164
    },
    {
        "comment": "Multi-tiered responsive contingency",
        "user_id": 40,
        "blog_id": 143
    },
    {
        "comment": "Public-key interactive algorithm",
        "user_id": 39,
        "blog_id": 172
    },
    {
        "comment": "Enterprise-wide zero defect budgetary management",
        "user_id": 62,
        "blog_id": 150
    },
    {
        "comment": "Up-sized clear-thinking capability",
        "user_id": 28,
        "blog_id": 165
    },
    {
        "comment": "Upgradable transitional policy",
        "user_id": 1,
        "blog_id": 191
    },
    {
        "comment": "Monitored stable contingency",
        "user_id": 16,
        "blog_id": 155
    },
    {
        "comment": "Distributed didactic monitoring",
        "user_id": 86,
        "blog_id": 189
    },
    {
        "comment": "Managed logistical moderator",
        "user_id": 73,
        "blog_id": 89
    },
    {
        "comment": "Ameliorated bifurcated customer loyalty",
        "user_id": 4,
        "blog_id": 75
    },
    {
        "comment": "Mandatory zero tolerance extranet",
        "user_id": 31,
        "blog_id": 33
    },
    {
        "comment": "Down-sized attitude-oriented approach",
        "user_id": 81,
        "blog_id": 125
    },
    {
        "comment": "Devolved eco-centric adapter",
        "user_id": 7,
        "blog_id": 56
    },
    {
        "comment": "Realigned national productivity",
        "user_id": 46,
        "blog_id": 44
    },
    {
        "comment": "Adaptive responsive artificial intelligence",
        "user_id": 26,
        "blog_id": 76
    },
    {
        "comment": "Quality-focused clear-thinking middleware",
        "user_id": 77,
        "blog_id": 52
    },
    {
        "comment": "Polarised mission-critical time-frame",
        "user_id": 39,
        "blog_id": 196
    },
    {
        "comment": "Streamlined solution-oriented definition",
        "user_id": 59,
        "blog_id": 62
    },
    {
        "comment": "Visionary real-time workforce",
        "user_id": 94,
        "blog_id": 146
    },
    {
        "comment": "Open-source optimizing groupware",
        "user_id": 49,
        "blog_id": 82
    },
    {
        "comment": "Up-sized heuristic neural-net",
        "user_id": 5,
        "blog_id": 128
    },
    {
        "comment": "Phased responsive internet solution",
        "user_id": 52,
        "blog_id": 3
    },
    {
        "comment": "Enhanced global analyzer",
        "user_id": 10,
        "blog_id": 134
    },
    {
        "comment": "Operative 6th generation challenge",
        "user_id": 38,
        "blog_id": 190
    },
    {
        "comment": "Inverse stable moratorium",
        "user_id": 13,
        "blog_id": 82
    },
    {
        "comment": "Innovative reciprocal framework",
        "user_id": 37,
        "blog_id": 4
    },
    {
        "comment": "Total methodical concept",
        "user_id": 68,
        "blog_id": 133
    },
    {
        "comment": "Managed coherent help-desk",
        "user_id": 50,
        "blog_id": 192
    },
    {
        "comment": "Devolved holistic website",
        "user_id": 66,
        "blog_id": 159
    },
    {
        "comment": "Devolved uniform forecast",
        "user_id": 24,
        "blog_id": 132
    },
    {
        "comment": "Persistent 24 hour paradigm",
        "user_id": 33,
        "blog_id": 123
    },
    {
        "comment": "Customer-focused clear-thinking strategy",
        "user_id": 25,
        "blog_id": 132
    },
    {
        "comment": "Up-sized upward-trending Graphic Interface",
        "user_id": 8,
        "blog_id": 90
    },
    {
        "comment": "Expanded directional hardware",
        "user_id": 29,
        "blog_id": 87
    },
    {
        "comment": "Pre-emptive intermediate knowledge base",
        "user_id": 44,
        "blog_id": 172
    },
    {
        "comment": "Re-contextualized contextually-based standardization",
        "user_id": 15,
        "blog_id": 40
    },
    {
        "comment": "Assimilated tertiary pricing structure",
        "user_id": 96,
        "blog_id": 172
    },
    {
        "comment": "Synergized stable application",
        "user_id": 71,
        "blog_id": 175
    },
    {
        "comment": "Cross-group zero tolerance success",
        "user_id": 81,
        "blog_id": 122
    },
    {
        "comment": "Triple-buffered explicit customer loyalty",
        "user_id": 53,
        "blog_id": 91
    },
    {
        "comment": "Assimilated discrete software",
        "user_id": 60,
        "blog_id": 14
    },
    {
        "comment": "Networked reciprocal firmware",
        "user_id": 48,
        "blog_id": 56
    },
    {
        "comment": "Open-architected maximized analyzer",
        "user_id": 23,
        "blog_id": 130
    },
    {
        "comment": "Vision-oriented asymmetric interface",
        "user_id": 22,
        "blog_id": 74
    },
    {
        "comment": "Decentralized value-added success",
        "user_id": 96,
        "blog_id": 27
    },
    {
        "comment": "Exclusive zero administration contingency",
        "user_id": 83,
        "blog_id": 79
    },
    {
        "comment": "Devolved cohesive local area network",
        "user_id": 11,
        "blog_id": 61
    },
    {
        "comment": "Versatile 24/7 help-desk",
        "user_id": 96,
        "blog_id": 17
    },
    {
        "comment": "Object-based national attitude",
        "user_id": 72,
        "blog_id": 48
    },
    {
        "comment": "De-engineered clear-thinking local area network",
        "user_id": 10,
        "blog_id": 169
    },
    {
        "comment": "De-engineered reciprocal architecture",
        "user_id": 6,
        "blog_id": 128
    },
    {
        "comment": "Reduced client-driven superstructure",
        "user_id": 100,
        "blog_id": 70
    },
    {
        "comment": "Robust national adapter",
        "user_id": 1,
        "blog_id": 179
    },
    {
        "comment": "Function-based radical info-mediaries",
        "user_id": 85,
        "blog_id": 191
    },
    {
        "comment": "Open-source holistic strategy",
        "user_id": 100,
        "blog_id": 107
    },
    {
        "comment": "Upgradable actuating infrastructure",
        "user_id": 10,
        "blog_id": 52
    },
    {
        "comment": "Innovative actuating task-force",
        "user_id": 20,
        "blog_id": 35
    },
    {
        "comment": "Customer-focused reciprocal process improvement",
        "user_id": 63,
        "blog_id": 151
    },
    {
        "comment": "Monitored scalable artificial intelligence",
        "user_id": 69,
        "blog_id": 178
    },
    {
        "comment": "Ergonomic asymmetric concept",
        "user_id": 14,
        "blog_id": 145
    },
    {
        "comment": "Visionary content-based alliance",
        "user_id": 67,
        "blog_id": 199
    },
    {
        "comment": "Proactive optimizing parallelism",
        "user_id": 16,
        "blog_id": 60
    },
    {
        "comment": "Adaptive composite concept",
        "user_id": 22,
        "blog_id": 39
    },
    {
        "comment": "Managed mobile product",
        "user_id": 69,
        "blog_id": 184
    },
    {
        "comment": "Synergized interactive standardization",
        "user_id": 56,
        "blog_id": 76
    },
    {
        "comment": "Implemented maximized local area network",
        "user_id": 72,
        "blog_id": 15
    },
    {
        "comment": "Open-source dedicated database",
        "user_id": 52,
        "blog_id": 37
    },
    {
        "comment": "Implemented transitional flexibility",
        "user_id": 87,
        "blog_id": 70
    },
    {
        "comment": "Re-engineered empowering help-desk",
        "user_id": 49,
        "blog_id": 102
    },
    {
        "comment": "Enterprise-wide executive open architecture",
        "user_id": 48,
        "blog_id": 27
    },
    {
        "comment": "Monitored human-resource synergy",
        "user_id": 21,
        "blog_id": 134
    },
    {
        "comment": "Ergonomic background support",
        "user_id": 82,
        "blog_id": 100
    },
    {
        "comment": "Public-key composite capacity",
        "user_id": 50,
        "blog_id": 124
    },
    {
        "comment": "Team-oriented 3rd generation ability",
        "user_id": 67,
        "blog_id": 167
    },
    {
        "comment": "Grass-roots maximized parallelism",
        "user_id": 22,
        "blog_id": 17
    },
    {
        "comment": "Reduced user-facing ability",
        "user_id": 34,
        "blog_id": 174
    },
    {
        "comment": "Profound uniform projection",
        "user_id": 78,
        "blog_id": 170
    },
    {
        "comment": "Triple-buffered bandwidth-monitored toolset",
        "user_id": 80,
        "blog_id": 6
    },
    {
        "comment": "Realigned impactful time-frame",
        "user_id": 70,
        "blog_id": 171
    },
    {
        "comment": "Organic bandwidth-monitored core",
        "user_id": 74,
        "blog_id": 188
    },
    {
        "comment": "Quality-focused context-sensitive archive",
        "user_id": 77,
        "blog_id": 6
    },
    {
        "comment": "Multi-channelled hybrid archive",
        "user_id": 31,
        "blog_id": 63
    },
    {
        "comment": "Organic object-oriented productivity",
        "user_id": 56,
        "blog_id": 35
    },
    {
        "comment": "Devolved uniform frame",
        "user_id": 85,
        "blog_id": 163
    },
    {
        "comment": "Synchronised heuristic customer loyalty",
        "user_id": 43,
        "blog_id": 83
    },
    {
        "comment": "Synergistic motivating project",
        "user_id": 98,
        "blog_id": 12
    },
    {
        "comment": "Proactive incremental core",
        "user_id": 87,
        "blog_id": 111
    },
    {
        "comment": "Operative real-time solution",
        "user_id": 28,
        "blog_id": 19
    },
    {
        "comment": "Compatible background task-force",
        "user_id": 97,
        "blog_id": 172
    },
    {
        "comment": "Seamless dynamic collaboration",
        "user_id": 87,
        "blog_id": 184
    },
    {
        "comment": "Robust zero tolerance utilisation",
        "user_id": 14,
        "blog_id": 131
    },
    {
        "comment": "Multi-tiered directional Graphical User Interface",
        "user_id": 37,
        "blog_id": 162
    },
    {
        "comment": "Synchronised asymmetric function",
        "user_id": 5,
        "blog_id": 172
    },
    {
        "comment": "Configurable high-level archive",
        "user_id": 3,
        "blog_id": 112
    },
    {
        "comment": "Implemented global initiative",
        "user_id": 40,
        "blog_id": 84
    },
    {
        "comment": "Sharable explicit migration",
        "user_id": 24,
        "blog_id": 24
    },
    {
        "comment": "Upgradable zero administration implementation",
        "user_id": 11,
        "blog_id": 119
    },
    {
        "comment": "Configurable 24 hour monitoring",
        "user_id": 57,
        "blog_id": 139
    },
    {
        "comment": "Pre-emptive motivating installation",
        "user_id": 76,
        "blog_id": 41
    },
    {
        "comment": "Automated maximized internet solution",
        "user_id": 17,
        "blog_id": 152
    },
    {
        "comment": "Polarised multi-state internet solution",
        "user_id": 85,
        "blog_id": 163
    },
    {
        "comment": "Expanded secondary architecture",
        "user_id": 55,
        "blog_id": 165
    },
    {
        "comment": "Multi-layered directional secured line",
        "user_id": 80,
        "blog_id": 107
    },
    {
        "comment": "Front-line 24/7 projection",
        "user_id": 70,
        "blog_id": 161
    },
    {
        "comment": "Centralized static synergy",
        "user_id": 69,
        "blog_id": 120
    },
    {
        "comment": "Profound user-facing paradigm",
        "user_id": 28,
        "blog_id": 164
    },
    {
        "comment": "Robust global implementation",
        "user_id": 50,
        "blog_id": 72
    },
    {
        "comment": "Robust 24 hour Graphical User Interface",
        "user_id": 22,
        "blog_id": 57
    },
    {
        "comment": "Inverse human-resource access",
        "user_id": 90,
        "blog_id": 75
    },
    {
        "comment": "Face to face optimizing data-warehouse",
        "user_id": 50,
        "blog_id": 19
    },
    {
        "comment": "Universal methodical core",
        "user_id": 74,
        "blog_id": 185
    },
    {
        "comment": "Team-oriented 5th generation concept",
        "user_id": 43,
        "blog_id": 49
    },
    {
        "comment": "Secured intermediate circuit",
        "user_id": 49,
        "blog_id": 76
    },
    {
        "comment": "Object-based fault-tolerant strategy",
        "user_id": 28,
        "blog_id": 148
    },
    {
        "comment": "Streamlined responsive conglomeration",
        "user_id": 24,
        "blog_id": 80
    },
    {
        "comment": "Persistent user-facing knowledge user",
        "user_id": 10,
        "blog_id": 21
    },
    {
        "comment": "Phased attitude-oriented system engine",
        "user_id": 12,
        "blog_id": 140
    },
    {
        "comment": "Synergized 5th generation monitoring",
        "user_id": 58,
        "blog_id": 191
    },
    {
        "comment": "Expanded user-facing adapter",
        "user_id": 13,
        "blog_id": 46
    },
    {
        "comment": "Stand-alone explicit superstructure",
        "user_id": 18,
        "blog_id": 130
    },
    {
        "comment": "Diverse fresh-thinking application",
        "user_id": 42,
        "blog_id": 160
    },
    {
        "comment": "Quality-focused incremental product",
        "user_id": 83,
        "blog_id": 124
    },
    {
        "comment": "Focused non-volatile hub",
        "user_id": 23,
        "blog_id": 194
    },
    {
        "comment": "Multi-layered dedicated implementation",
        "user_id": 88,
        "blog_id": 113
    },
    {
        "comment": "Organic 5th generation leverage",
        "user_id": 75,
        "blog_id": 46
    },
    {
        "comment": "Fully-configurable high-level Graphical User Interface",
        "user_id": 42,
        "blog_id": 153
    },
    {
        "comment": "Managed real-time access",
        "user_id": 5,
        "blog_id": 104
    },
    {
        "comment": "Sharable user-facing circuit",
        "user_id": 90,
        "blog_id": 62
    },
    {
        "comment": "Cross-platform mission-critical paradigm",
        "user_id": 47,
        "blog_id": 46
    },
    {
        "comment": "Pre-emptive stable middleware",
        "user_id": 58,
        "blog_id": 52
    },
    {
        "comment": "Monitored optimizing knowledge base",
        "user_id": 46,
        "blog_id": 164
    },
    {
        "comment": "Multi-layered next generation encryption",
        "user_id": 70,
        "blog_id": 176
    },
    {
        "comment": "Automated static access",
        "user_id": 23,
        "blog_id": 60
    },
    {
        "comment": "Ameliorated object-oriented orchestration",
        "user_id": 45,
        "blog_id": 172
    },
    {
        "comment": "Implemented zero tolerance Graphical User Interface",
        "user_id": 63,
        "blog_id": 144
    },
    {
        "comment": "Public-key context-sensitive focus group",
        "user_id": 6,
        "blog_id": 56
    },
    {
        "comment": "Quality-focused encompassing leverage",
        "user_id": 88,
        "blog_id": 7
    },
    {
        "comment": "Mandatory empowering neural-net",
        "user_id": 19,
        "blog_id": 57
    },
    {
        "comment": "Compatible bandwidth-monitored instruction set",
        "user_id": 6,
        "blog_id": 72
    },
    {
        "comment": "Future-proofed national array",
        "user_id": 20,
        "blog_id": 63
    },
    {
        "comment": "Managed reciprocal matrix",
        "user_id": 33,
        "blog_id": 198
    },
    {
        "comment": "Business-focused executive toolset",
        "user_id": 82,
        "blog_id": 1
    },
    {
        "comment": "Right-sized multi-state firmware",
        "user_id": 12,
        "blog_id": 53
    },
    {
        "comment": "Realigned system-worthy framework",
        "user_id": 56,
        "blog_id": 120
    },
    {
        "comment": "Virtual bi-directional database",
        "user_id": 79,
        "blog_id": 129
    },
    {
        "comment": "Triple-buffered intangible moderator",
        "user_id": 85,
        "blog_id": 198
    },
    {
        "comment": "Streamlined mobile capacity",
        "user_id": 86,
        "blog_id": 27
    },
    {
        "comment": "Profound reciprocal open system",
        "user_id": 48,
        "blog_id": 51
    },
    {
        "comment": "Multi-channelled didactic encryption",
        "user_id": 39,
        "blog_id": 169
    },
    {
        "comment": "Universal demand-driven Graphical User Interface",
        "user_id": 21,
        "blog_id": 98
    },
    {
        "comment": "Profound content-based firmware",
        "user_id": 43,
        "blog_id": 182
    },
    {
        "comment": "Re-contextualized maximized productivity",
        "user_id": 31,
        "blog_id": 150
    },
    {
        "comment": "Public-key client-driven frame",
        "user_id": 47,
        "blog_id": 4
    },
    {
        "comment": "Object-based regional moratorium",
        "user_id": 67,
        "blog_id": 37
    },
    {
        "comment": "Open-source 4th generation support",
        "user_id": 41,
        "blog_id": 13
    },
    {
        "comment": "Progressive directional moratorium",
        "user_id": 76,
        "blog_id": 54
    },
    {
        "comment": "Horizontal systemic secured line",
        "user_id": 90,
        "blog_id": 72
    },
    {
        "comment": "Front-line 6th generation open architecture",
        "user_id": 82,
        "blog_id": 200
    },
    {
        "comment": "Polarised incremental focus group",
        "user_id": 82,
        "blog_id": 69
    },
    {
        "comment": "Progressive systematic throughput",
        "user_id": 55,
        "blog_id": 68
    },
    {
        "comment": "Ameliorated next generation project",
        "user_id": 96,
        "blog_id": 42
    },
    {
        "comment": "Self-enabling coherent hierarchy",
        "user_id": 10,
        "blog_id": 16
    },
    {
        "comment": "Re-contextualized context-sensitive portal",
        "user_id": 24,
        "blog_id": 163
    },
    {
        "comment": "Organic discrete groupware",
        "user_id": 85,
        "blog_id": 73
    },
    {
        "comment": "Synchronised regional moratorium",
        "user_id": 61,
        "blog_id": 166
    },
    {
        "comment": "Triple-buffered asymmetric projection",
        "user_id": 4,
        "blog_id": 101
    },
    {
        "comment": "Digitized modular archive",
        "user_id": 86,
        "blog_id": 132
    },
    {
        "comment": "Distributed homogeneous firmware",
        "user_id": 69,
        "blog_id": 77
    },
    {
        "comment": "Re-contextualized national hierarchy",
        "user_id": 59,
        "blog_id": 139
    },
    {
        "comment": "Digitized intangible conglomeration",
        "user_id": 49,
        "blog_id": 27
    },
    {
        "comment": "Operative responsive Graphical User Interface",
        "user_id": 48,
        "blog_id": 177
    },
    {
        "comment": "Organic well-modulated functionalities",
        "user_id": 53,
        "blog_id": 2
    },
    {
        "comment": "User-friendly context-sensitive concept",
        "user_id": 48,
        "blog_id": 47
    },
    {
        "comment": "Programmable 3rd generation strategy",
        "user_id": 68,
        "blog_id": 99
    },
    {
        "comment": "Face to face 5th generation internet solution",
        "user_id": 64,
        "blog_id": 108
    },
    {
        "comment": "Virtual systemic challenge",
        "user_id": 20,
        "blog_id": 145
    },
    {
        "comment": "Diverse uniform contingency",
        "user_id": 3,
        "blog_id": 12
    },
    {
        "comment": "Horizontal systematic moratorium",
        "user_id": 90,
        "blog_id": 37
    },
    {
        "comment": "Exclusive full-range projection",
        "user_id": 28,
        "blog_id": 199
    },
    {
        "comment": "Integrated high-level framework",
        "user_id": 39,
        "blog_id": 146
    },
    {
        "comment": "Enterprise-wide intangible budgetary management",
        "user_id": 71,
        "blog_id": 179
    },
    {
        "comment": "Versatile actuating challenge",
        "user_id": 16,
        "blog_id": 18
    },
    {
        "comment": "Digitized bandwidth-monitored budgetary management",
        "user_id": 12,
        "blog_id": 143
    },
    {
        "comment": "Cross-group uniform data-warehouse",
        "user_id": 52,
        "blog_id": 162
    },
    {
        "comment": "Innovative 4th generation protocol",
        "user_id": 64,
        "blog_id": 100
    },
    {
        "comment": "Visionary directional adapter",
        "user_id": 31,
        "blog_id": 49
    },
    {
        "comment": "Switchable bi-directional methodology",
        "user_id": 100,
        "blog_id": 121
    },
    {
        "comment": "Universal methodical Graphic Interface",
        "user_id": 67,
        "blog_id": 100
    },
    {
        "comment": "Multi-channelled multi-state framework",
        "user_id": 11,
        "blog_id": 131
    },
    {
        "comment": "Multi-layered bifurcated initiative",
        "user_id": 82,
        "blog_id": 132
    },
    {
        "comment": "Optional even-keeled methodology",
        "user_id": 20,
        "blog_id": 92
    },
    {
        "comment": "Phased zero defect adapter",
        "user_id": 29,
        "blog_id": 4
    },
    {
        "comment": "Profit-focused zero defect installation",
        "user_id": 67,
        "blog_id": 178
    },
    {
        "comment": "Diverse 4th generation structure",
        "user_id": 40,
        "blog_id": 163
    },
    {
        "comment": "Ergonomic 24/7 application",
        "user_id": 16,
        "blog_id": 8
    },
    {
        "comment": "Multi-tiered heuristic info-mediaries",
        "user_id": 85,
        "blog_id": 82
    },
    {
        "comment": "Decentralized disintermediate implementation",
        "user_id": 88,
        "blog_id": 53
    },
    {
        "comment": "Operative global migration",
        "user_id": 49,
        "blog_id": 141
    },
    {
        "comment": "Enterprise-wide intermediate alliance",
        "user_id": 5,
        "blog_id": 132
    },
    {
        "comment": "Expanded empowering product",
        "user_id": 44,
        "blog_id": 46
    },
    {
        "comment": "Down-sized leading edge internet solution",
        "user_id": 70,
        "blog_id": 2
    },
    {
        "comment": "Profit-focused fault-tolerant orchestration",
        "user_id": 42,
        "blog_id": 195
    },
    {
        "comment": "Horizontal dedicated time-frame",
        "user_id": 46,
        "blog_id": 29
    },
    {
        "comment": "Multi-channelled fault-tolerant info-mediaries",
        "user_id": 73,
        "blog_id": 64
    },
    {
        "comment": "Optional zero defect matrices",
        "user_id": 88,
        "blog_id": 109
    },
    {
        "comment": "Ergonomic 6th generation installation",
        "user_id": 67,
        "blog_id": 174
    },
    {
        "comment": "Mandatory maximized installation",
        "user_id": 97,
        "blog_id": 137
    },
    {
        "comment": "Optimized maximized open architecture",
        "user_id": 69,
        "blog_id": 95
    },
    {
        "comment": "Optional grid-enabled definition",
        "user_id": 73,
        "blog_id": 30
    },
    {
        "comment": "Stand-alone zero defect open architecture",
        "user_id": 26,
        "blog_id": 66
    },
    {
        "comment": "Synchronised fresh-thinking matrix",
        "user_id": 93,
        "blog_id": 58
    },
    {
        "comment": "Ameliorated next generation middleware",
        "user_id": 66,
        "blog_id": 160
    },
    {
        "comment": "Implemented dynamic archive",
        "user_id": 70,
        "blog_id": 63
    },
    {
        "comment": "Managed grid-enabled attitude",
        "user_id": 65,
        "blog_id": 95
    },
    {
        "comment": "Open-source uniform collaboration",
        "user_id": 77,
        "blog_id": 191
    },
    {
        "comment": "Versatile human-resource service-desk",
        "user_id": 12,
        "blog_id": 78
    },
    {
        "comment": "Horizontal 5th generation attitude",
        "user_id": 14,
        "blog_id": 58
    },
    {
        "comment": "Synergistic tangible archive",
        "user_id": 38,
        "blog_id": 170
    },
    {
        "comment": "User-friendly client-server portal",
        "user_id": 34,
        "blog_id": 134
    },
    {
        "comment": "Seamless bi-directional firmware",
        "user_id": 82,
        "blog_id": 157
    },
    {
        "comment": "Distributed homogeneous task-force",
        "user_id": 63,
        "blog_id": 136
    },
    {
        "comment": "Re-engineered encompassing interface",
        "user_id": 55,
        "blog_id": 87
    },
    {
        "comment": "Distributed value-added migration",
        "user_id": 76,
        "blog_id": 162
    },
    {
        "comment": "Sharable multi-tasking contingency",
        "user_id": 86,
        "blog_id": 123
    },
    {
        "comment": "Configurable incremental frame",
        "user_id": 100,
        "blog_id": 67
    },
    {
        "comment": "Enhanced human-resource adapter",
        "user_id": 33,
        "blog_id": 122
    },
    {
        "comment": "Synchronised demand-driven throughput",
        "user_id": 4,
        "blog_id": 43
    },
    {
        "comment": "Robust global definition",
        "user_id": 68,
        "blog_id": 46
    },
    {
        "comment": "Networked modular customer loyalty",
        "user_id": 64,
        "blog_id": 178
    },
    {
        "comment": "Centralized composite success",
        "user_id": 21,
        "blog_id": 149
    },
    {
        "comment": "Configurable well-modulated superstructure",
        "user_id": 49,
        "blog_id": 57
    },
    {
        "comment": "Sharable disintermediate array",
        "user_id": 95,
        "blog_id": 182
    },
    {
        "comment": "Secured exuding process improvement",
        "user_id": 44,
        "blog_id": 88
    },
    {
        "comment": "Configurable directional ability",
        "user_id": 31,
        "blog_id": 149
    },
    {
        "comment": "Stand-alone multimedia project",
        "user_id": 83,
        "blog_id": 192
    },
    {
        "comment": "Distributed directional hub",
        "user_id": 66,
        "blog_id": 87
    },
    {
        "comment": "Optional dynamic benchmark",
        "user_id": 85,
        "blog_id": 146
    },
    {
        "comment": "Centralized executive migration",
        "user_id": 78,
        "blog_id": 55
    },
    {
        "comment": "Triple-buffered systemic synergy",
        "user_id": 40,
        "blog_id": 78
    },
    {
        "comment": "Persistent logistical protocol",
        "user_id": 91,
        "blog_id": 124
    },
    {
        "comment": "Synergistic holistic frame",
        "user_id": 21,
        "blog_id": 75
    },
    {
        "comment": "Fully-configurable radical challenge",
        "user_id": 67,
        "blog_id": 10
    },
    {
        "comment": "Extended background moderator",
        "user_id": 35,
        "blog_id": 2
    },
    {
        "comment": "Automated national policy",
        "user_id": 94,
        "blog_id": 118
    },
    {
        "comment": "Persistent radical framework",
        "user_id": 79,
        "blog_id": 70
    },
    {
        "comment": "De-engineered client-server capability",
        "user_id": 33,
        "blog_id": 24
    },
    {
        "comment": "Stand-alone 6th generation architecture",
        "user_id": 11,
        "blog_id": 67
    },
    {
        "comment": "Focused logistical Graphic Interface",
        "user_id": 48,
        "blog_id": 65
    },
    {
        "comment": "Centralized neutral encryption",
        "user_id": 93,
        "blog_id": 18
    },
    {
        "comment": "Universal radical moderator",
        "user_id": 23,
        "blog_id": 79
    },
    {
        "comment": "Phased even-keeled definition",
        "user_id": 59,
        "blog_id": 52
    },
    {
        "comment": "Universal national circuit",
        "user_id": 12,
        "blog_id": 103
    },
    {
        "comment": "Digitized next generation archive",
        "user_id": 34,
        "blog_id": 76
    },
    {
        "comment": "Multi-channelled human-resource paradigm",
        "user_id": 93,
        "blog_id": 125
    },
    {
        "comment": "De-engineered analyzing open system",
        "user_id": 89,
        "blog_id": 29
    },
    {
        "comment": "Switchable secondary customer loyalty",
        "user_id": 42,
        "blog_id": 2
    },
    {
        "comment": "Customer-focused solution-oriented access",
        "user_id": 24,
        "blog_id": 138
    },
    {
        "comment": "Proactive context-sensitive parallelism",
        "user_id": 35,
        "blog_id": 98
    },
    {
        "comment": "Open-source heuristic workforce",
        "user_id": 99,
        "blog_id": 77
    },
    {
        "comment": "Profound national database",
        "user_id": 69,
        "blog_id": 165
    },
    {
        "comment": "Robust intangible time-frame",
        "user_id": 1,
        "blog_id": 146
    },
    {
        "comment": "Decentralized user-facing strategy",
        "user_id": 63,
        "blog_id": 146
    },
    {
        "comment": "Object-based transitional analyzer",
        "user_id": 44,
        "blog_id": 146
    },
    {
        "comment": "Multi-layered asynchronous flexibility",
        "user_id": 87,
        "blog_id": 98
    },
    {
        "comment": "Customizable dedicated projection",
        "user_id": 46,
        "blog_id": 40
    },
    {
        "comment": "Customizable impactful challenge",
        "user_id": 25,
        "blog_id": 15
    },
    {
        "comment": "Self-enabling global instruction set",
        "user_id": 70,
        "blog_id": 102
    },
    {
        "comment": "Customizable reciprocal access",
        "user_id": 15,
        "blog_id": 132
    },
    {
        "comment": "Down-sized full-range model",
        "user_id": 49,
        "blog_id": 106
    },
    {
        "comment": "Pre-emptive hybrid circuit",
        "user_id": 93,
        "blog_id": 175
    },
    {
        "comment": "Devolved bottom-line groupware",
        "user_id": 44,
        "blog_id": 173
    },
    {
        "comment": "Organic interactive workforce",
        "user_id": 38,
        "blog_id": 188
    },
    {
        "comment": "Assimilated client-driven project",
        "user_id": 62,
        "blog_id": 162
    },
    {
        "comment": "Centralized asymmetric system engine",
        "user_id": 50,
        "blog_id": 106
    },
    {
        "comment": "Balanced coherent ability",
        "user_id": 10,
        "blog_id": 123
    },
    {
        "comment": "Stand-alone dynamic toolset",
        "user_id": 35,
        "blog_id": 98
    },
    {
        "comment": "Devolved composite archive",
        "user_id": 93,
        "blog_id": 2
    },
    {
        "comment": "Exclusive non-volatile standardization",
        "user_id": 57,
        "blog_id": 156
    },
    {
        "comment": "Public-key reciprocal extranet",
        "user_id": 40,
        "blog_id": 86
    },
    {
        "comment": "Re-engineered impactful customer loyalty",
        "user_id": 72,
        "blog_id": 188
    },
    {
        "comment": "Total hybrid hardware",
        "user_id": 63,
        "blog_id": 128
    },
    {
        "comment": "Inverse upward-trending initiative",
        "user_id": 52,
        "blog_id": 113
    },
    {
        "comment": "Networked stable budgetary management",
        "user_id": 48,
        "blog_id": 36
    },
    {
        "comment": "Automated demand-driven projection",
        "user_id": 91,
        "blog_id": 168
    },
    {
        "comment": "Multi-layered demand-driven Graphical User Interface",
        "user_id": 35,
        "blog_id": 11
    },
    {
        "comment": "Multi-channelled optimal focus group",
        "user_id": 21,
        "blog_id": 62
    },
    {
        "comment": "Public-key encompassing standardization",
        "user_id": 51,
        "blog_id": 155
    },
    {
        "comment": "Universal asymmetric Graphical User Interface",
        "user_id": 56,
        "blog_id": 87
    },
    {
        "comment": "Virtual system-worthy circuit",
        "user_id": 16,
        "blog_id": 41
    },
    {
        "comment": "Managed real-time standardization",
        "user_id": 25,
        "blog_id": 38
    },
    {
        "comment": "Secured grid-enabled structure",
        "user_id": 98,
        "blog_id": 144
    },
    {
        "comment": "Vision-oriented 24/7 application",
        "user_id": 74,
        "blog_id": 147
    },
    {
        "comment": "Re-contextualized responsive migration",
        "user_id": 55,
        "blog_id": 63
    },
    {
        "comment": "Networked system-worthy structure",
        "user_id": 51,
        "blog_id": 13
    },
    {
        "comment": "Operative human-resource customer loyalty",
        "user_id": 98,
        "blog_id": 64
    },
    {
        "comment": "Inverse zero defect synergy",
        "user_id": 72,
        "blog_id": 141
    },
    {
        "comment": "Enhanced 24 hour protocol",
        "user_id": 20,
        "blog_id": 119
    },
    {
        "comment": "Mandatory mission-critical workforce",
        "user_id": 64,
        "blog_id": 113
    },
    {
        "comment": "Monitored maximized structure",
        "user_id": 64,
        "blog_id": 6
    },
    {
        "comment": "Right-sized cohesive system engine",
        "user_id": 39,
        "blog_id": 64
    },
    {
        "comment": "Business-focused object-oriented framework",
        "user_id": 93,
        "blog_id": 106
    },
    {
        "comment": "Managed multi-tasking approach",
        "user_id": 9,
        "blog_id": 93
    },
    {
        "comment": "Ergonomic demand-driven structure",
        "user_id": 98,
        "blog_id": 53
    },
    {
        "comment": "Re-contextualized responsive service-desk",
        "user_id": 84,
        "blog_id": 100
    },
    {
        "comment": "Front-line transitional portal",
        "user_id": 36,
        "blog_id": 71
    },
    {
        "comment": "Object-based non-volatile firmware",
        "user_id": 83,
        "blog_id": 40
    },
    {
        "comment": "Up-sized background matrix",
        "user_id": 95,
        "blog_id": 175
    },
    {
        "comment": "Profit-focused impactful project",
        "user_id": 71,
        "blog_id": 183
    },
    {
        "comment": "Enterprise-wide uniform hierarchy",
        "user_id": 37,
        "blog_id": 9
    },
    {
        "comment": "Total value-added local area network",
        "user_id": 19,
        "blog_id": 158
    },
    {
        "comment": "Integrated local methodology",
        "user_id": 13,
        "blog_id": 96
    },
    {
        "comment": "Ergonomic logistical pricing structure",
        "user_id": 87,
        "blog_id": 189
    },
    {
        "comment": "Self-enabling 24/7 Graphical User Interface",
        "user_id": 86,
        "blog_id": 136
    },
    {
        "comment": "Visionary radical leverage",
        "user_id": 25,
        "blog_id": 49
    },
    {
        "comment": "Virtual explicit encryption",
        "user_id": 75,
        "blog_id": 11
    },
    {
        "comment": "Customer-focused optimal support",
        "user_id": 96,
        "blog_id": 116
    },
    {
        "comment": "Switchable interactive support",
        "user_id": 26,
        "blog_id": 65
    },
    {
        "comment": "Quality-focused asymmetric ability",
        "user_id": 48,
        "blog_id": 91
    },
    {
        "comment": "Networked executive infrastructure",
        "user_id": 34,
        "blog_id": 167
    },
    {
        "comment": "Future-proofed fault-tolerant workforce",
        "user_id": 37,
        "blog_id": 12
    },
    {
        "comment": "Reduced static productivity",
        "user_id": 4,
        "blog_id": 177
    },
    {
        "comment": "Monitored didactic policy",
        "user_id": 48,
        "blog_id": 28
    },
    {
        "comment": "Adaptive grid-enabled infrastructure",
        "user_id": 5,
        "blog_id": 108
    },
    {
        "comment": "Pre-emptive well-modulated conglomeration",
        "user_id": 92,
        "blog_id": 56
    },
    {
        "comment": "Quality-focused neutral array",
        "user_id": 22,
        "blog_id": 79
    },
    {
        "comment": "Grass-roots intermediate array",
        "user_id": 14,
        "blog_id": 158
    },
    {
        "comment": "Fundamental client-server artificial intelligence",
        "user_id": 26,
        "blog_id": 182
    },
    {
        "comment": "Multi-channelled attitude-oriented installation",
        "user_id": 63,
        "blog_id": 47
    },
    {
        "comment": "Reduced static access",
        "user_id": 93,
        "blog_id": 133
    },
    {
        "comment": "Open-architected multi-tasking intranet",
        "user_id": 93,
        "blog_id": 114
    },
    {
        "comment": "Object-based dynamic hub",
        "user_id": 89,
        "blog_id": 67
    },
    {
        "comment": "Ergonomic directional policy",
        "user_id": 22,
        "blog_id": 170
    },
    {
        "comment": "Secured hybrid artificial intelligence",
        "user_id": 85,
        "blog_id": 45
    },
    {
        "comment": "Managed coherent database",
        "user_id": 30,
        "blog_id": 56
    },
    {
        "comment": "Proactive user-facing hub",
        "user_id": 47,
        "blog_id": 113
    },
    {
        "comment": "Innovative composite Graphical User Interface",
        "user_id": 98,
        "blog_id": 69
    },
    {
        "comment": "Monitored bifurcated standardization",
        "user_id": 60,
        "blog_id": 151
    }

]


const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;