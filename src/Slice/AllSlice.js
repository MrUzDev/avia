import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: localStorage.getItem('access'),
  value: 0,
  ticketData: {
    "search": {
        "inclusion_carriers": [],
        "exclusion_carriers": [],
        "adt": 1,
        "channel": "API2EASY",
        "chd": 0,
        "class": "A",
        "inf": 0,
        "partner": "API2",
        "segments": [
            {
                "from": {
                    "name": "Tashkent",
                    "iata": "TAS",
                    "country": {
                        "name": "Uzbekistan",
                        "iata": "UZ"
                    },
                    "region": "---"
                },
                "to": {
                    "name": "Dubai",
                    "iata": "DXB",
                    "country": {
                        "name": "United Arab Emirates",
                        "iata": "AE"
                    },
                    "region": "---"
                },
                "date": "14.11.2023"
            }
        ],
        "src": 0,
        "token": "API2EASYOWA1000001000TASDXB20231114_EN",
        "type": "ow",
        "yth": 0,
        "ins": 0
    },
    "flights": [
        {
            "id": "API2EASYOWA1000001000TASDXB20231114_EN-TUA.HY.0.215.F1977500S1963550.OENCUDM1MzQxMjU=..-17.HY.333.TAS.202311140825.DXB.202311141100.788.U12MOWLT.215.0.TUA.0.1P20K",
            "is_tour_operator": false,
            "tariff": "",
            "tariff_class": "",
            "fare_family_type": "",
            "fare_family_flag": true,
            "fare_family_marketing_name": "",
            "duration": 215,
            "segments_count": 1,
            "type": "regular",
            "is_inner_flight": false,
            "is_baggage": true,
            "is_charter": false,
            "is_refund": false,
            "is_hide_tariff": false,
            "is_subsidized": false,
            "book_url": "",
            "citizenships": null,
            "is_vtrip": false,
            "provider": {
                "gds": 17,
                "name": "TUA",
                "supplier": {
                    "id": 877,
                    "code": "HY",
                    "title": "Uzbekistan Airways"
                }
            },
            "office_id": "P3534125",
            "price": {
                "RUB": {
                    "amount": 19774,
                    "passengers_amounts": {
                        "adult": 19775
                    },
                    "agent_mode_prices": {
                        "total_amount_for_active_agent_mode": 19774,
                        "total_amount_for_non_active_agent_mode": 19775,
                        "total_partner_affiliate_fee": 1,
                        "debit_from_balance": 19775,
                        "passengers_amounts_details": [
                            {
                                "type": "adt",
                                "service_amount_for_active_agent_mode": 19774,
                                "service_amount_for_non_active_agent_mode": 19775
                            }
                        ]
                    },
                    "comsa": 1,
                    "partner_affiliate_fee": 0,
                    "start_price": 19635.5,
                    "passengers_amounts_details": [
                        {
                            "type": "adt",
                            "amount": 19774,
                            "tax": 9190.5,
                            "tariff": 10445,
                            "fee": 139.5,
                            "partner_affiliate_fee": 0,
                            "comsa": -1
                        }
                    ]
                },
                "UZS": {
                    "amount": 2669490
                }
            },
            "price_details": [],
            "extra_baggage": [],
            "segments": [
                {
                    "arr": {
                        "date": "14.11.2023",
                        "time": "11:00",
                        "datetime": "14.11.2023 11:00:00",
                        "ts": 1699948800,
                        "terminal": "1",
                        "airport": {
                            "id": 79531,
                            "title": "Dubai",
                            "short_title": "",
                            "code": "DXB"
                        },
                        "city": {
                            "id": 12,
                            "code": "DXB",
                            "title": "Dubai"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 2,
                            "code": "AE",
                            "title": "United Arab Emirates"
                        }
                    },
                    "dep": {
                        "date": "14.11.2023",
                        "time": "08:25",
                        "datetime": "14.11.2023 08:25:00",
                        "ts": 1699939500,
                        "terminal": "2",
                        "airport": {
                            "id": 81720,
                            "title": "Vostohny",
                            "short_title": "",
                            "code": "TAS"
                        },
                        "city": {
                            "id": 85524,
                            "code": "TAS",
                            "title": "Tashkent"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 233,
                            "code": "UZ",
                            "title": "Uzbekistan"
                        }
                    },
                    "seats": 9,
                    "flight_number": "333",
                    "direction": 0,
                    "duration": {
                        "flight": {
                            "common": 215,
                            "hour": 3,
                            "minute": 35
                        }
                    },
                    "route_duration": 215,
                    "is_baggage": true,
                    "baggage": {
                        "piece": 1,
                        "weight": 20
                    },
                    "comment": "✈Free baggage and carry-on baggage allowance:\n- for Main line flights - up to 23 or 32 kg and hand luggage 8kg for 3 (HY601 / 602, etc.) or 4 (HY 3601/3602, etc.) with the flight number;\n- for Low-cost flights - 15 kg.(starting from 02FEB22 -  23kg) and 5kg hand luggage for transportation by 4-digit flight number starting with 9 (HY9613 / 9614, etc.).\n- for business class passengers - 10 kg; The size of carry-on baggage must not exceed 115 cm in the sum of three dimensions.  ✈At Blagoveshchensk airport, for flight HY704, BQS-TAS, check-in closes 2 hours before flight departure",
                    "comment_hash": "c3b39fa6caf6544cd322e11972a49483640e8ae6",
                    "cbaggage": {
                        "piece": 1,
                        "weight": 8,
                        "dimensions": null,
                        "weight_unit": "KG"
                    },
                    "is_refund": false,
                    "is_change": true,
                    "refund": false,
                    "change": true,
                    "class": {
                        "type_id": 1,
                        "name": "E",
                        "service": "U"
                    },
                    "first": true,
                    "last": true,
                    "fare_code": "U12MOWLT",
                    "carrier": {
                        "id": 877,
                        "code": "HY",
                        "title": "Uzbekistan Airways"
                    },
                    "aircraft": {
                        "code": "788",
                        "title": "Boeing 787-800"
                    },
                    "stops": [],
                    "miles": "",
                    "change_miles": "",
                    "is_mini_rules_exists": true,
                    "is_online_checkin_required": false,
                    "brands": [
                        ""
                    ],
                    "baggage_recheck": false,
                    "provider": {
                        "gds": 17,
                        "name": "TUA",
                        "supplier": {
                            "id": 877,
                            "code": "HY",
                            "title": "Uzbekistan Airways"
                        }
                    },
                    "type": "regular"
                }
            ],
            "segments_direction": [
                [
                    0
                ]
            ],
            "upgrades": [],
            "pricer_info": [],
            "documents": {
                "adt": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "chd": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "inf": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "ins": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "src": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                },
                "yth": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                }
            },
            "ticketing_time_limit": 1699880280,
            "booking_with_partial_data_allowed": true,
            "special_tariff_type": null,
            "age_thresholds": {
                "infant": {
                    "min": 0,
                    "max": 2
                },
                "child": {
                    "min": 2,
                    "max": 12
                },
                "adult": {
                    "min": 12,
                    "max": 200
                }
            },
            "is_health_declaration_checked": false
        },
        {
            "id": "API2EASYOWA1000001000TASDXB20231114_EN-TUA.FZ.0.235.F2569000S2529100...-24.FZ.1942.TAS.202311140400.DXB.202311140655.73D.MOX7UZ2.235.0.TUA.0.1P20K",
            "is_tour_operator": false,
            "tariff": "",
            "tariff_class": "",
            "fare_family_type": "VALUE",
            "fare_family_flag": false,
            "fare_family_marketing_name": "",
            "duration": 235,
            "segments_count": 1,
            "type": "regular",
            "is_inner_flight": false,
            "is_baggage": true,
            "is_charter": false,
            "is_refund": true,
            "is_hide_tariff": false,
            "is_subsidized": false,
            "book_url": "",
            "citizenships": null,
            "is_vtrip": false,
            "provider": {
                "gds": 24,
                "name": "TUA",
                "supplier": {
                    "id": 924,
                    "code": "FZ",
                    "title": "Flydubai"
                }
            },
            "office_id": null,
            "price": {
                "RUB": {
                    "amount": 25689,
                    "passengers_amounts": {
                        "adult": 25689
                    },
                    "agent_mode_prices": {
                        "total_amount_for_active_agent_mode": 25689,
                        "total_amount_for_non_active_agent_mode": 25690,
                        "total_partner_affiliate_fee": 1,
                        "debit_from_balance": 25690,
                        "passengers_amounts_details": [
                            {
                                "type": "adt",
                                "service_amount_for_active_agent_mode": 25689,
                                "service_amount_for_non_active_agent_mode": 25690
                            }
                        ]
                    },
                    "comsa": 1,
                    "partner_affiliate_fee": 0,
                    "start_price": 25291,
                    "passengers_amounts_details": [
                        {
                            "type": "adt",
                            "amount": 25689,
                            "tax": 0,
                            "tariff": 25291,
                            "fee": 399,
                            "partner_affiliate_fee": 0,
                            "comsa": -1
                        }
                    ]
                },
                "UZS": {
                    "amount": 3468015
                }
            },
            "price_details": [],
            "extra_baggage": [],
            "segments": [
                {
                    "arr": {
                        "date": "14.11.2023",
                        "time": "06:55",
                        "datetime": "14.11.2023 06:55:00",
                        "ts": 1699934100,
                        "terminal": "3",
                        "airport": {
                            "id": 79531,
                            "title": "Dubai",
                            "short_title": "",
                            "code": "DXB"
                        },
                        "city": {
                            "id": 12,
                            "code": "DXB",
                            "title": "Dubai"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 2,
                            "code": "AE",
                            "title": "United Arab Emirates"
                        }
                    },
                    "dep": {
                        "date": "14.11.2023",
                        "time": "04:00",
                        "datetime": "14.11.2023 04:00:00",
                        "ts": 1699923600,
                        "terminal": "",
                        "airport": {
                            "id": 81720,
                            "title": "Vostohny",
                            "short_title": "",
                            "code": "TAS"
                        },
                        "city": {
                            "id": 85524,
                            "code": "TAS",
                            "title": "Tashkent"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 233,
                            "code": "UZ",
                            "title": "Uzbekistan"
                        }
                    },
                    "seats": 9,
                    "flight_number": "1942",
                    "direction": 0,
                    "duration": {
                        "flight": {
                            "common": 235,
                            "hour": 3,
                            "minute": 55
                        }
                    },
                    "route_duration": 235,
                    "is_baggage": true,
                    "baggage": {
                        "piece": 1,
                        "weight": 20
                    },
                    "comment": "✈VALUE Fare NON - REFUNDABLE / NON - CHANGEABLE LESS THAN 24 HOURS BEFORE DEPARTURE ✈IMPORTANT! For information on restrictions on flights to/from Saudi Arabia during the Umrah/Hajj season and entry requirements, please visit the airline’s website https://www.flydubai.com/ru/help/operational-updates/umrah-hajj-flights  ✈ From November 7, 2022, passengers traveling to the UAE for tourism purposes are required to have a return ticket.✈ If the flight is operated by a code-sharing partner (a joint operation flight), the rules of the carrier's airline apply to the carry-on baggage allowance, with which can be found on the carrier's official website.",
                    "comment_hash": "b9b0807d87d05c11b901729a2bd82245c95b013a",
                    "cbaggage": {
                        "piece": 1,
                        "weight": 7,
                        "dimensions": null,
                        "weight_unit": "KG"
                    },
                    "is_refund": true,
                    "is_change": true,
                    "refund": true,
                    "change": true,
                    "class": {
                        "type_id": 1,
                        "name": "E",
                        "service": "Y"
                    },
                    "first": true,
                    "last": true,
                    "fare_code": "MOX7UZ2",
                    "carrier": {
                        "id": 924,
                        "code": "FZ",
                        "title": "Flydubai"
                    },
                    "aircraft": {
                        "code": "73D",
                        "title": ""
                    },
                    "stops": [],
                    "miles": "",
                    "change_miles": "",
                    "is_mini_rules_exists": true,
                    "is_online_checkin_required": false,
                    "brands": [],
                    "baggage_recheck": false,
                    "provider": {
                        "gds": 24,
                        "name": "TUA",
                        "supplier": {
                            "id": 924,
                            "code": "FZ",
                            "title": "Flydubai"
                        }
                    },
                    "type": "regular"
                }
            ],
            "segments_direction": [
                [
                    0
                ]
            ],
            "upgrades": [],
            "pricer_info": [],
            "documents": {
                "adt": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "chd": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "inf": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "ins": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "src": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                },
                "yth": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                }
            },
            "ticketing_time_limit": 1699880880,
            "booking_with_partial_data_allowed": false,
            "special_tariff_type": null,
            "age_thresholds": {
                "infant": {
                    "min": 0,
                    "max": 2
                },
                "child": {
                    "min": 2,
                    "max": 12
                },
                "adult": {
                    "min": 12,
                    "max": 200
                }
            },
            "is_health_declaration_checked": false
        },
        {
            "id": "API2EASYOWA1000001000TASDXB20231114_EN-TUA.FZ.0.235.F2707100S2667100.OENCUDM1MzQxMjY=..-17.FZ.1942.TAS.202311140400.DXB.202311140655.7M8.MOL7UZ1.235.0.TUA.0.1P30K",
            "is_tour_operator": false,
            "tariff": "",
            "tariff_class": "",
            "fare_family_type": "",
            "fare_family_flag": true,
            "fare_family_marketing_name": "",
            "duration": 235,
            "segments_count": 1,
            "type": "regular",
            "is_inner_flight": false,
            "is_baggage": true,
            "is_charter": false,
            "is_refund": true,
            "is_hide_tariff": false,
            "is_subsidized": false,
            "book_url": "",
            "citizenships": null,
            "is_vtrip": false,
            "provider": {
                "gds": 17,
                "name": "TUA",
                "supplier": {
                    "id": 924,
                    "code": "FZ",
                    "title": "Flydubai"
                }
            },
            "office_id": "P3534126",
            "price": {
                "RUB": {
                    "amount": 27070,
                    "passengers_amounts": {
                        "adult": 27070
                    },
                    "agent_mode_prices": {
                        "total_amount_for_active_agent_mode": 27070,
                        "total_amount_for_non_active_agent_mode": 27071,
                        "total_partner_affiliate_fee": 1,
                        "debit_from_balance": 27071,
                        "passengers_amounts_details": [
                            {
                                "type": "adt",
                                "service_amount_for_active_agent_mode": 27070,
                                "service_amount_for_non_active_agent_mode": 27071
                            }
                        ]
                    },
                    "comsa": 1,
                    "partner_affiliate_fee": 0,
                    "start_price": 26671,
                    "passengers_amounts_details": [
                        {
                            "type": "adt",
                            "amount": 27070,
                            "tax": 9926,
                            "tariff": 16745,
                            "fee": 400,
                            "partner_affiliate_fee": 0,
                            "comsa": -1
                        }
                    ]
                },
                "UZS": {
                    "amount": 3654450
                }
            },
            "price_details": [],
            "extra_baggage": [],
            "segments": [
                {
                    "arr": {
                        "date": "14.11.2023",
                        "time": "06:55",
                        "datetime": "14.11.2023 06:55:00",
                        "ts": 1699934100,
                        "terminal": "3",
                        "airport": {
                            "id": 79531,
                            "title": "Dubai",
                            "short_title": "",
                            "code": "DXB"
                        },
                        "city": {
                            "id": 12,
                            "code": "DXB",
                            "title": "Dubai"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 2,
                            "code": "AE",
                            "title": "United Arab Emirates"
                        }
                    },
                    "dep": {
                        "date": "14.11.2023",
                        "time": "04:00",
                        "datetime": "14.11.2023 04:00:00",
                        "ts": 1699923600,
                        "terminal": "0",
                        "airport": {
                            "id": 81720,
                            "title": "Vostohny",
                            "short_title": "",
                            "code": "TAS"
                        },
                        "city": {
                            "id": 85524,
                            "code": "TAS",
                            "title": "Tashkent"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 233,
                            "code": "UZ",
                            "title": "Uzbekistan"
                        }
                    },
                    "seats": 7,
                    "flight_number": "1942",
                    "direction": 0,
                    "duration": {
                        "flight": {
                            "common": 235,
                            "hour": 3,
                            "minute": 55
                        }
                    },
                    "route_duration": 235,
                    "is_baggage": true,
                    "baggage": {
                        "piece": 1,
                        "weight": 30
                    },
                    "comment": "✈VALUE Fare NON - REFUNDABLE / NON - CHANGEABLE LESS THAN 24 HOURS BEFORE DEPARTURE ✈IMPORTANT! For information on restrictions on flights to/from Saudi Arabia during the Umrah/Hajj season and entry requirements, please visit the airline’s website https://www.flydubai.com/ru/help/operational-updates/umrah-hajj-flights  ✈ From November 7, 2022, passengers traveling to the UAE for tourism purposes are required to have a return ticket.✈ If the flight is operated by a code-sharing partner (a joint operation flight), the rules of the carrier's airline apply to the carry-on baggage allowance, with which can be found on the carrier's official website.",
                    "comment_hash": "b9b0807d87d05c11b901729a2bd82245c95b013a",
                    "cbaggage": {
                        "piece": 1,
                        "weight": 7,
                        "dimensions": null,
                        "weight_unit": "KG"
                    },
                    "is_refund": true,
                    "is_change": true,
                    "refund": true,
                    "change": true,
                    "class": {
                        "type_id": 1,
                        "name": "E",
                        "service": "M"
                    },
                    "first": true,
                    "last": true,
                    "fare_code": "MOL7UZ1",
                    "carrier": {
                        "id": 924,
                        "code": "FZ",
                        "title": "Flydubai"
                    },
                    "aircraft": {
                        "code": "7M8",
                        "title": "Boeing 737 Max 8 Passenger"
                    },
                    "stops": [],
                    "miles": "",
                    "change_miles": "",
                    "is_mini_rules_exists": true,
                    "is_online_checkin_required": false,
                    "brands": [
                        ""
                    ],
                    "baggage_recheck": false,
                    "provider": {
                        "gds": 17,
                        "name": "TUA",
                        "supplier": {
                            "id": 924,
                            "code": "FZ",
                            "title": "Flydubai"
                        }
                    },
                    "type": "regular"
                }
            ],
            "segments_direction": [
                [
                    0
                ]
            ],
            "upgrades": [],
            "pricer_info": [],
            "documents": {
                "adt": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "chd": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "inf": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "ins": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "src": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                },
                "yth": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                }
            },
            "ticketing_time_limit": 1699880880,
            "booking_with_partial_data_allowed": true,
            "special_tariff_type": null,
            "age_thresholds": {
                "infant": {
                    "min": 0,
                    "max": 2
                },
                "child": {
                    "min": 2,
                    "max": 12
                },
                "adult": {
                    "min": 12,
                    "max": 200
                }
            },
            "is_health_declaration_checked": false
        },
        {
            "id": "API2EASYOWA1000001000TASDXB20231114_EN-TUA.FZ.0.235.F3112000S3072100...-24.FZ.1942.TAS.202311140400.DXB.202311140655.73D.MOX8UZ2.235.0.TUA.0.1P20K",
            "is_tour_operator": false,
            "tariff": "",
            "tariff_class": "",
            "fare_family_type": "FLEX",
            "fare_family_flag": false,
            "fare_family_marketing_name": "",
            "duration": 235,
            "segments_count": 1,
            "type": "regular",
            "is_inner_flight": false,
            "is_baggage": true,
            "is_charter": false,
            "is_refund": true,
            "is_hide_tariff": false,
            "is_subsidized": false,
            "book_url": "",
            "citizenships": null,
            "is_vtrip": false,
            "provider": {
                "gds": 24,
                "name": "TUA",
                "supplier": {
                    "id": 924,
                    "code": "FZ",
                    "title": "Flydubai"
                }
            },
            "office_id": null,
            "price": {
                "RUB": {
                    "amount": 31119,
                    "passengers_amounts": {
                        "adult": 31119
                    },
                    "agent_mode_prices": {
                        "total_amount_for_active_agent_mode": 31119,
                        "total_amount_for_non_active_agent_mode": 31120,
                        "total_partner_affiliate_fee": 1,
                        "debit_from_balance": 31120,
                        "passengers_amounts_details": [
                            {
                                "type": "adt",
                                "service_amount_for_active_agent_mode": 31119,
                                "service_amount_for_non_active_agent_mode": 31120
                            }
                        ]
                    },
                    "comsa": 1,
                    "partner_affiliate_fee": 0,
                    "start_price": 30721,
                    "passengers_amounts_details": [
                        {
                            "type": "adt",
                            "amount": 31119,
                            "tax": 0,
                            "tariff": 30721,
                            "fee": 399,
                            "partner_affiliate_fee": 0,
                            "comsa": -1
                        }
                    ]
                },
                "UZS": {
                    "amount": 4201065
                }
            },
            "price_details": [],
            "extra_baggage": [],
            "segments": [
                {
                    "arr": {
                        "date": "14.11.2023",
                        "time": "06:55",
                        "datetime": "14.11.2023 06:55:00",
                        "ts": 1699934100,
                        "terminal": "3",
                        "airport": {
                            "id": 79531,
                            "title": "Dubai",
                            "short_title": "",
                            "code": "DXB"
                        },
                        "city": {
                            "id": 12,
                            "code": "DXB",
                            "title": "Dubai"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 2,
                            "code": "AE",
                            "title": "United Arab Emirates"
                        }
                    },
                    "dep": {
                        "date": "14.11.2023",
                        "time": "04:00",
                        "datetime": "14.11.2023 04:00:00",
                        "ts": 1699923600,
                        "terminal": "",
                        "airport": {
                            "id": 81720,
                            "title": "Vostohny",
                            "short_title": "",
                            "code": "TAS"
                        },
                        "city": {
                            "id": 85524,
                            "code": "TAS",
                            "title": "Tashkent"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 233,
                            "code": "UZ",
                            "title": "Uzbekistan"
                        }
                    },
                    "seats": 9,
                    "flight_number": "1942",
                    "direction": 0,
                    "duration": {
                        "flight": {
                            "common": 235,
                            "hour": 3,
                            "minute": 55
                        }
                    },
                    "route_duration": 235,
                    "is_baggage": true,
                    "baggage": {
                        "piece": 1,
                        "weight": 20
                    },
                    "comment": "✈FLEX Fare✈IMPORTANT! For information on restrictions on flights to/from Saudi Arabia during the Umrah/Hajj season and entry requirements, please visit the airline’s website✈ If the flight is operated by a code-sharing partner (a joint operation flight), the rules of the carrier's airline apply to the carry-on baggage allowance, with which can be found on the carrier's official website.",
                    "comment_hash": "8efa784f99da21cef153c0cf731b495402b6e75f",
                    "cbaggage": {
                        "piece": 1,
                        "weight": 7,
                        "dimensions": null,
                        "weight_unit": "KG"
                    },
                    "is_refund": true,
                    "is_change": true,
                    "refund": true,
                    "change": true,
                    "class": {
                        "type_id": 1,
                        "name": "E",
                        "service": "Y"
                    },
                    "first": true,
                    "last": true,
                    "fare_code": "MOX8UZ2",
                    "carrier": {
                        "id": 924,
                        "code": "FZ",
                        "title": "Flydubai"
                    },
                    "aircraft": {
                        "code": "73D",
                        "title": ""
                    },
                    "stops": [],
                    "miles": "",
                    "change_miles": "",
                    "is_mini_rules_exists": true,
                    "is_online_checkin_required": false,
                    "brands": [],
                    "baggage_recheck": false,
                    "provider": {
                        "gds": 24,
                        "name": "TUA",
                        "supplier": {
                            "id": 924,
                            "code": "FZ",
                            "title": "Flydubai"
                        }
                    },
                    "type": "regular"
                }
            ],
            "segments_direction": [
                [
                    0
                ]
            ],
            "upgrades": [],
            "pricer_info": [],
            "documents": {
                "adt": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "chd": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "inf": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "ins": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "src": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                },
                "yth": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                }
            },
            "ticketing_time_limit": 1699880880,
            "booking_with_partial_data_allowed": false,
            "special_tariff_type": null,
            "age_thresholds": {
                "infant": {
                    "min": 0,
                    "max": 2
                },
                "child": {
                    "min": 2,
                    "max": 12
                },
                "adult": {
                    "min": 12,
                    "max": 200
                }
            },
            "is_health_declaration_checked": false
        },
        {
            "id": "API2EASYOWA1000001000TASDXB20231114_EN-TUA.EK.0.235.F3259900S3219900.OENCUDM1MzQxMjU=..-17.EKFZ.2087.TAS.202311140400.DXB.202311140655.7M8.USO8SUZ1.235.0.TUA.0.1P30K",
            "is_tour_operator": false,
            "tariff": "",
            "tariff_class": "",
            "fare_family_type": "Economy Flex",
            "fare_family_flag": true,
            "fare_family_marketing_name": "",
            "duration": 235,
            "segments_count": 1,
            "type": "regular",
            "is_inner_flight": false,
            "is_baggage": true,
            "is_charter": false,
            "is_refund": true,
            "is_hide_tariff": false,
            "is_subsidized": false,
            "book_url": "",
            "citizenships": null,
            "is_vtrip": false,
            "provider": {
                "gds": 17,
                "name": "TUA",
                "supplier": {
                    "id": 719,
                    "code": "EK",
                    "title": "Emirates"
                }
            },
            "office_id": "P3534125",
            "price": {
                "RUB": {
                    "amount": 32598,
                    "passengers_amounts": {
                        "adult": 32598
                    },
                    "agent_mode_prices": {
                        "total_amount_for_active_agent_mode": 32598,
                        "total_amount_for_non_active_agent_mode": 32599,
                        "total_partner_affiliate_fee": 1,
                        "debit_from_balance": 32599,
                        "passengers_amounts_details": [
                            {
                                "type": "adt",
                                "service_amount_for_active_agent_mode": 32598,
                                "service_amount_for_non_active_agent_mode": 32599
                            }
                        ]
                    },
                    "comsa": 1,
                    "partner_affiliate_fee": 0,
                    "start_price": 32199,
                    "passengers_amounts_details": [
                        {
                            "type": "adt",
                            "amount": 32598,
                            "tax": 11214,
                            "tariff": 20985,
                            "fee": 400,
                            "partner_affiliate_fee": 0,
                            "comsa": -1
                        }
                    ]
                },
                "UZS": {
                    "amount": 4400730
                }
            },
            "price_details": [],
            "extra_baggage": [],
            "segments": [
                {
                    "arr": {
                        "date": "14.11.2023",
                        "time": "06:55",
                        "datetime": "14.11.2023 06:55:00",
                        "ts": 1699934100,
                        "terminal": "3",
                        "airport": {
                            "id": 79531,
                            "title": "Dubai",
                            "short_title": "",
                            "code": "DXB"
                        },
                        "city": {
                            "id": 12,
                            "code": "DXB",
                            "title": "Dubai"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 2,
                            "code": "AE",
                            "title": "United Arab Emirates"
                        }
                    },
                    "dep": {
                        "date": "14.11.2023",
                        "time": "04:00",
                        "datetime": "14.11.2023 04:00:00",
                        "ts": 1699923600,
                        "terminal": "",
                        "airport": {
                            "id": 81720,
                            "title": "Vostohny",
                            "short_title": "",
                            "code": "TAS"
                        },
                        "city": {
                            "id": 85524,
                            "code": "TAS",
                            "title": "Tashkent"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 233,
                            "code": "UZ",
                            "title": "Uzbekistan"
                        }
                    },
                    "seats": 9,
                    "flight_number": "2087",
                    "direction": 0,
                    "duration": {
                        "flight": {
                            "common": 235,
                            "hour": 3,
                            "minute": 55
                        }
                    },
                    "route_duration": 235,
                    "is_baggage": true,
                    "baggage": {
                        "piece": 1,
                        "weight": 30
                    },
                    "comment": "✈Passengers departing from India are allowed one piece of carry-on baggage - carry-on baggage size cannot exceed 115 cm (the sum of length, width and height). Note. Passengers on flights departing from Brazil can carry up to 10 kg of hand luggage",
                    "comment_hash": "7fe4a6a041462a8206f2f2908412310a3b184a3a",
                    "cbaggage": {
                        "piece": 1,
                        "weight": 7,
                        "dimensions": null,
                        "weight_unit": "KG"
                    },
                    "is_refund": true,
                    "is_change": true,
                    "refund": true,
                    "change": true,
                    "class": {
                        "type_id": 1,
                        "name": "E",
                        "service": "U"
                    },
                    "first": true,
                    "last": true,
                    "fare_code": "USO8SUZ1",
                    "carrier": {
                        "id": 924,
                        "code": "FZ",
                        "title": "Flydubai"
                    },
                    "aircraft": {
                        "code": "7M8",
                        "title": "Boeing 737 Max 8 Passenger"
                    },
                    "stops": [],
                    "miles": "",
                    "change_miles": "",
                    "is_mini_rules_exists": true,
                    "is_online_checkin_required": false,
                    "brands": [
                        "Economy Flex"
                    ],
                    "baggage_recheck": false,
                    "provider": {
                        "gds": 17,
                        "name": "TUA",
                        "supplier": {
                            "id": 719,
                            "code": "EK",
                            "title": "Emirates"
                        }
                    },
                    "type": "regular"
                }
            ],
            "segments_direction": [
                [
                    0
                ]
            ],
            "upgrades": [],
            "pricer_info": [],
            "documents": {
                "adt": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "chd": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "inf": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "ins": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "src": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                },
                "yth": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                }
            },
            "ticketing_time_limit": 1699882380,
            "booking_with_partial_data_allowed": true,
            "special_tariff_type": null,
            "age_thresholds": {
                "infant": {
                    "min": 0,
                    "max": 2
                },
                "child": {
                    "min": 2,
                    "max": 12
                },
                "adult": {
                    "min": 12,
                    "max": 200
                }
            },
            "is_health_declaration_checked": false
        },
        {
            "id": "API2EASYOWA1000001000TASDXB20231114_EN-TUA.EK.0.235.F11242000S11201982.OENCUDM0MTI0MzM=..-17.EKFZ.2087.TAS.202311140400.DXB.202311140655.7M8.ROO8FUZ1.235.0.TUA.0.1P35K",
            "is_tour_operator": false,
            "tariff": "",
            "tariff_class": "",
            "fare_family_type": "Economy Flex Plus",
            "fare_family_flag": true,
            "fare_family_marketing_name": "",
            "duration": 235,
            "segments_count": 1,
            "type": "regular",
            "is_inner_flight": false,
            "is_baggage": true,
            "is_charter": false,
            "is_refund": true,
            "is_hide_tariff": false,
            "is_subsidized": false,
            "book_url": "",
            "citizenships": null,
            "is_vtrip": false,
            "provider": {
                "gds": 17,
                "name": "TUA",
                "supplier": {
                    "id": 719,
                    "code": "EK",
                    "title": "Emirates"
                }
            },
            "office_id": "P3412433",
            "price": {
                "RUB": {
                    "amount": 112419,
                    "passengers_amounts": {
                        "adult": 112419
                    },
                    "agent_mode_prices": {
                        "total_amount_for_active_agent_mode": 112419,
                        "total_amount_for_non_active_agent_mode": 112420,
                        "total_partner_affiliate_fee": 1,
                        "debit_from_balance": 112420,
                        "passengers_amounts_details": [
                            {
                                "type": "adt",
                                "service_amount_for_active_agent_mode": 112419,
                                "service_amount_for_non_active_agent_mode": 112420
                            }
                        ]
                    },
                    "comsa": 1,
                    "partner_affiliate_fee": 0,
                    "start_price": 112019.82,
                    "passengers_amounts_details": [
                        {
                            "type": "adt",
                            "amount": 112419,
                            "tax": 11908.82,
                            "tariff": 100111,
                            "fee": 400.179999999993,
                            "partner_affiliate_fee": 0,
                            "comsa": -1
                        }
                    ]
                },
                "UZS": {
                    "amount": 15176565
                }
            },
            "price_details": [],
            "extra_baggage": [],
            "segments": [
                {
                    "arr": {
                        "date": "14.11.2023",
                        "time": "06:55",
                        "datetime": "14.11.2023 06:55:00",
                        "ts": 1699934100,
                        "terminal": "3",
                        "airport": {
                            "id": 79531,
                            "title": "Dubai",
                            "short_title": "",
                            "code": "DXB"
                        },
                        "city": {
                            "id": 12,
                            "code": "DXB",
                            "title": "Dubai"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 2,
                            "code": "AE",
                            "title": "United Arab Emirates"
                        }
                    },
                    "dep": {
                        "date": "14.11.2023",
                        "time": "04:00",
                        "datetime": "14.11.2023 04:00:00",
                        "ts": 1699923600,
                        "terminal": "",
                        "airport": {
                            "id": 81720,
                            "title": "Vostohny",
                            "short_title": "",
                            "code": "TAS"
                        },
                        "city": {
                            "id": 85524,
                            "code": "TAS",
                            "title": "Tashkent"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 233,
                            "code": "UZ",
                            "title": "Uzbekistan"
                        }
                    },
                    "seats": 9,
                    "flight_number": "2087",
                    "direction": 0,
                    "duration": {
                        "flight": {
                            "common": 235,
                            "hour": 3,
                            "minute": 55
                        }
                    },
                    "route_duration": 235,
                    "is_baggage": true,
                    "baggage": {
                        "piece": 1,
                        "weight": 35
                    },
                    "comment": "✈If the free baggage allowance per passenger is 35kg, 40kg or 50kg (without restrictions on the number of pieces), then one piece should not exceed 32kg.✈Passengers departing from India are allowed one piece of carry-on baggage - carry-on baggage size cannot exceed 115 cm (the sum of length, width and height). Note. Passengers on flights departing from Brazil can carry up to 10 kg of hand luggage\n✈ From November 7, 2022, passengers traveling to the UAE for tourism purposes are required to have a return ticket.",
                    "comment_hash": "eaaf848163a2b9820d9aa60333ac0149daa90995",
                    "cbaggage": {
                        "piece": 1,
                        "weight": 7,
                        "dimensions": null,
                        "weight_unit": "KG"
                    },
                    "is_refund": true,
                    "is_change": true,
                    "refund": true,
                    "change": true,
                    "class": {
                        "type_id": 1,
                        "name": "E",
                        "service": "R"
                    },
                    "first": true,
                    "last": true,
                    "fare_code": "ROO8FUZ1",
                    "carrier": {
                        "id": 924,
                        "code": "FZ",
                        "title": "Flydubai"
                    },
                    "aircraft": {
                        "code": "7M8",
                        "title": "Boeing 737 Max 8 Passenger"
                    },
                    "stops": [],
                    "miles": "",
                    "change_miles": "",
                    "is_mini_rules_exists": true,
                    "is_online_checkin_required": false,
                    "brands": [
                        "Economy Flex Plus"
                    ],
                    "baggage_recheck": false,
                    "provider": {
                        "gds": 17,
                        "name": "TUA",
                        "supplier": {
                            "id": 719,
                            "code": "EK",
                            "title": "Emirates"
                        }
                    },
                    "type": "regular"
                }
            ],
            "segments_direction": [
                [
                    0
                ]
            ],
            "upgrades": [],
            "pricer_info": [],
            "documents": {
                "adt": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "chd": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "inf": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "ins": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "src": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                },
                "yth": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                }
            },
            "ticketing_time_limit": 1699882380,
            "booking_with_partial_data_allowed": true,
            "special_tariff_type": null,
            "age_thresholds": {
                "infant": {
                    "min": 0,
                    "max": 2
                },
                "child": {
                    "min": 2,
                    "max": 12
                },
                "adult": {
                    "min": 12,
                    "max": 200
                }
            },
            "is_health_declaration_checked": false
        },
        {
            "id": "API2EASYOWA1000001000TASDXB20231114_EN-TUA.FZ.0.235.F12781500S12741600...-24.FZ.1942.TAS.202311140400.DXB.202311140655.73D.ZO9UZ2.235.0.TUA.0.1P40K",
            "is_tour_operator": false,
            "tariff": "",
            "tariff_class": "",
            "fare_family_type": "BUSINESS",
            "fare_family_flag": false,
            "fare_family_marketing_name": "",
            "duration": 235,
            "segments_count": 1,
            "type": "regular",
            "is_inner_flight": false,
            "is_baggage": true,
            "is_charter": false,
            "is_refund": true,
            "is_hide_tariff": false,
            "is_subsidized": false,
            "book_url": "",
            "citizenships": null,
            "is_vtrip": false,
            "provider": {
                "gds": 24,
                "name": "TUA",
                "supplier": {
                    "id": 924,
                    "code": "FZ",
                    "title": "Flydubai"
                }
            },
            "office_id": null,
            "price": {
                "RUB": {
                    "amount": 127814,
                    "passengers_amounts": {
                        "adult": 127814
                    },
                    "agent_mode_prices": {
                        "total_amount_for_active_agent_mode": 127814,
                        "total_amount_for_non_active_agent_mode": 127815,
                        "total_partner_affiliate_fee": 1,
                        "debit_from_balance": 127815,
                        "passengers_amounts_details": [
                            {
                                "type": "adt",
                                "service_amount_for_active_agent_mode": 127814,
                                "service_amount_for_non_active_agent_mode": 127815
                            }
                        ]
                    },
                    "comsa": 1,
                    "partner_affiliate_fee": 0,
                    "start_price": 127416,
                    "passengers_amounts_details": [
                        {
                            "type": "adt",
                            "amount": 127814,
                            "tax": 0,
                            "tariff": 127416,
                            "fee": 399,
                            "partner_affiliate_fee": 0,
                            "comsa": -1
                        }
                    ]
                },
                "UZS": {
                    "amount": 17254890
                }
            },
            "price_details": [],
            "extra_baggage": [],
            "segments": [
                {
                    "arr": {
                        "date": "14.11.2023",
                        "time": "06:55",
                        "datetime": "14.11.2023 06:55:00",
                        "ts": 1699934100,
                        "terminal": "3",
                        "airport": {
                            "id": 79531,
                            "title": "Dubai",
                            "short_title": "",
                            "code": "DXB"
                        },
                        "city": {
                            "id": 12,
                            "code": "DXB",
                            "title": "Dubai"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 2,
                            "code": "AE",
                            "title": "United Arab Emirates"
                        }
                    },
                    "dep": {
                        "date": "14.11.2023",
                        "time": "04:00",
                        "datetime": "14.11.2023 04:00:00",
                        "ts": 1699923600,
                        "terminal": "",
                        "airport": {
                            "id": 81720,
                            "title": "Vostohny",
                            "short_title": "",
                            "code": "TAS"
                        },
                        "city": {
                            "id": 85524,
                            "code": "TAS",
                            "title": "Tashkent"
                        },
                        "region": {
                            "id": null,
                            "code": null,
                            "title": null
                        },
                        "country": {
                            "id": 233,
                            "code": "UZ",
                            "title": "Uzbekistan"
                        }
                    },
                    "seats": 5,
                    "flight_number": "1942",
                    "direction": 0,
                    "duration": {
                        "flight": {
                            "common": 235,
                            "hour": 3,
                            "minute": 55
                        }
                    },
                    "route_duration": 235,
                    "is_baggage": true,
                    "baggage": {
                        "piece": 1,
                        "weight": 40
                    },
                    "comment": "✈Business Fare ✈IMPORTANT! For information on restrictions on flights to/from Saudi Arabia during the Umrah/Hajj season and entry requirements, please visit the airline’s website https://www.flydubai.com/ru/help/operational-updates/umrah-hajj-flights ✈From November 7, 2022, passengers traveling to the UAE for tourism purposes are required to have a return ticket. ✈ If the flight is operated by a code-sharing partner (a joint operation flight), the rules of the carrier's airline apply to the carry-on baggage allowance, with which can be found on the carrier's official website.",
                    "comment_hash": "4fef8304ea361997b594308941cc0a10a4442f25",
                    "cbaggage": {
                        "piece": 1,
                        "weight": 14,
                        "dimensions": null,
                        "weight_unit": "KG"
                    },
                    "is_refund": true,
                    "is_change": true,
                    "refund": true,
                    "change": true,
                    "class": {
                        "type_id": 2,
                        "name": "B",
                        "service": "C"
                    },
                    "first": true,
                    "last": true,
                    "fare_code": "ZO9UZ2",
                    "carrier": {
                        "id": 924,
                        "code": "FZ",
                        "title": "Flydubai"
                    },
                    "aircraft": {
                        "code": "73D",
                        "title": ""
                    },
                    "stops": [],
                    "miles": "",
                    "change_miles": "",
                    "is_mini_rules_exists": true,
                    "is_online_checkin_required": false,
                    "brands": [],
                    "baggage_recheck": false,
                    "provider": {
                        "gds": 24,
                        "name": "TUA",
                        "supplier": {
                            "id": 924,
                            "code": "FZ",
                            "title": "Flydubai"
                        }
                    },
                    "type": "regular"
                }
            ],
            "segments_direction": [
                [
                    0
                ]
            ],
            "upgrades": [],
            "pricer_info": [],
            "documents": {
                "adt": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "chd": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "inf": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "ins": {
                    "ru": [
                        "P"
                    ],
                    "other": [
                        "A"
                    ]
                },
                "src": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                },
                "yth": {
                    "ru": [
                        "P"
                    ],
                    "other": []
                }
            },
            "ticketing_time_limit": 1699880880,
            "booking_with_partial_data_allowed": false,
            "special_tariff_type": null,
            "age_thresholds": {
                "infant": {
                    "min": 0,
                    "max": 2
                },
                "child": {
                    "min": 2,
                    "max": 12
                },
                "adult": {
                    "min": 12,
                    "max": 200
                }
            },
            "is_health_declaration_checked": false
        }
    ],
    "segments_comments": {
        "c3b39fa6caf6544cd322e11972a49483640e8ae6": "✈Free baggage and carry-on baggage allowance:\n- for Main line flights - up to 23 or 32 kg and hand luggage 8kg for 3 (HY601 / 602, etc.) or 4 (HY 3601/3602, etc.) with the flight number;\n- for Low-cost flights - 15 kg.(starting from 02FEB22 -  23kg) and 5kg hand luggage for transportation by 4-digit flight number starting with 9 (HY9613 / 9614, etc.).\n- for business class passengers - 10 kg; The size of carry-on baggage must not exceed 115 cm in the sum of three dimensions.  ✈At Blagoveshchensk airport, for flight HY704, BQS-TAS, check-in closes 2 hours before flight departure",
        "b9b0807d87d05c11b901729a2bd82245c95b013a": "✈VALUE Fare NON - REFUNDABLE / NON - CHANGEABLE LESS THAN 24 HOURS BEFORE DEPARTURE ✈IMPORTANT! For information on restrictions on flights to/from Saudi Arabia during the Umrah/Hajj season and entry requirements, please visit the airline’s website https://www.flydubai.com/ru/help/operational-updates/umrah-hajj-flights  ✈ From November 7, 2022, passengers traveling to the UAE for tourism purposes are required to have a return ticket.✈ If the flight is operated by a code-sharing partner (a joint operation flight), the rules of the carrier's airline apply to the carry-on baggage allowance, with which can be found on the carrier's official website.",
        "8efa784f99da21cef153c0cf731b495402b6e75f": "✈FLEX Fare✈IMPORTANT! For information on restrictions on flights to/from Saudi Arabia during the Umrah/Hajj season and entry requirements, please visit the airline’s website✈ If the flight is operated by a code-sharing partner (a joint operation flight), the rules of the carrier's airline apply to the carry-on baggage allowance, with which can be found on the carrier's official website.",
        "7fe4a6a041462a8206f2f2908412310a3b184a3a": "✈Passengers departing from India are allowed one piece of carry-on baggage - carry-on baggage size cannot exceed 115 cm (the sum of length, width and height). Note. Passengers on flights departing from Brazil can carry up to 10 kg of hand luggage",
        "eaaf848163a2b9820d9aa60333ac0149daa90995": "✈If the free baggage allowance per passenger is 35kg, 40kg or 50kg (without restrictions on the number of pieces), then one piece should not exceed 32kg.✈Passengers departing from India are allowed one piece of carry-on baggage - carry-on baggage size cannot exceed 115 cm (the sum of length, width and height). Note. Passengers on flights departing from Brazil can carry up to 10 kg of hand luggage\n✈ From November 7, 2022, passengers traveling to the UAE for tourism purposes are required to have a return ticket.",
        "4fef8304ea361997b594308941cc0a10a4442f25": "✈Business Fare ✈IMPORTANT! For information on restrictions on flights to/from Saudi Arabia during the Umrah/Hajj season and entry requirements, please visit the airline’s website https://www.flydubai.com/ru/help/operational-updates/umrah-hajj-flights ✈From November 7, 2022, passengers traveling to the UAE for tourism purposes are required to have a return ticket. ✈ If the flight is operated by a code-sharing partner (a joint operation flight), the rules of the carrier's airline apply to the carry-on baggage allowance, with which can be found on the carrier's official website."
    },
    "health_declaration_text": "\n                COVID-19 health declaration\n                I declare that:\n                1) I have not had any COVID-19 symptoms, such as a fever with a temperature over 37.5° C (99.5°F), cough, \n                cold, headache, diarrhea, sore throat, runny nose, any respiratory problems, or a decrease or loss of \n                smell or taste, within the last 14 days.\n                2) I have not had contact with a COVID-19 confirmed case or suspected case or a person issued with a \n                Quarantine Order/Stay-Home Notice within the last 14 days.\n                3) I have not tested positive for COVID-19 within 15 days of my planned travel date and I am not \n                quarantined for reasons related to COVID-19.\n                4) I have not had close contact with a person affected by COVID-19 fewer than 2 days before their symptoms \n                began and up to 14 days after their symptoms disappeared.\n                5) I also undertake to inform the air carrier and Local Health Authority of any possible occurrence of the \n                above-mentioned symptoms arising within 8 days of disembarking from the aircraft.\n                I declare that all passengers in my booking meet these requirements on the date of registration. \n                I understand that in case of violation of any points of this statement, I will be denied a trip. \n                I undertake to inform the supplier if any of the listed items cease to correspond to reality, and I will \n                not arrive at the airport in case of non-compliance with the specified requirements.\n                I am also aware of the need to familiarize myself with all the rules, documents necessary for crossing \n                borders and restrictions related to COVID-19.\n                I understand that without these documents, I may not be allowed on board, and also take a fee for filling \n                them out if I did not do it online.\n                The data must be provided no later than 24 hours before departure\n                Without this information, we will not be able to register passengers, and they may have to pay a check-in \n                fee at the airport.\n                If forms / questionnaires / declarations, etc. are required for the flight, the passenger must have them \n                with him at the time of landing at the airport, in case the a/k wants to get acquainted with them.\n                If you do not agree with the above conditions, the supplier recommends rescheduling the trip, as \n                representatives of the carrier will not allow you on board.\n                ",
    "predefined_airlines": [],
    "excluded_airlines": []
},
  ticketAdults: 1,
  ticketChild: 0,
  ticketBabies: 0,
  ticketTarif: 'a',
  shopTicketCom: false,
  ticketId: '',
  filterAirlines: [],
  changeFilterAir: false,
  allAirlinesName: []
}


export const slice = createSlice({
    name: 'AllSlice',
    initialState,
    reducers: {
    
      changeTicketData: (state, action) => {
        state.ticketData = action.payload
      },
      setTicketAdult: (state, action) => {
        state.ticketAdults = action.payload
      },
      setTicketChild: (state, action) => {
        state.ticketChild = action.payload
      },
      setTicketBabies: (state, action) => {
        state.ticketBabies = action.payload
      },
      setTicketTarif: (state, action) => {
        state.ticketTarif = action.payload
      },
      setShopTicketCom: (state, action) => {
        state.shopTicketCom = action.payload
      },
      setTicketId: (state, action) => {
        state.ticketId = action.payload
      },
      addFilterAirlines: (state, action) => {
        state.filterAirlines = [...state.filterAirlines.filter(item => (item !== action.payload)), action.payload]
      },
      removeFilterAirlines: (state, action) => {
        state.filterAirlines = [...state.filterAirlines.filter(item => (item !== action.payload))]
      },
      clearFilterAirlines: (state, action) => {
        state.filterAirlines = []
      },
      checkChangeAir: (state, action) => {
        state.changeFilterAir = true
      },
      addFilterAirlinesName: (state, action) => {
        state.allAirlinesName = [...state.allAirlinesName.filter(item => item.name !== action.payload.name), action.payload] 
      },
      clearFilterAirlinesName: (state, action) => {
        state.allAirlinesName = []
      },
    }
  })
  
  export const { changeTicketData, setTicketAdult, setTicketChild, setTicketBabies, setTicketTarif, setShopTicketCom, setTicketId, addFilterAirlines, removeFilterAirlines, checkChangeAir, addFilterAirlinesName, clearFilterAirlinesName, clearFilterAirlines } = slice.actions

  export default slice.reducer 