const overrides = {
  MuiCardHeader: {
    action: {
      marginTop: "-4px",
      marginRight: "-4px"
    }
  },
  MuiPickersDay: {
    day: {
      fontWeight: "300"
    }
  },
  MuiPickersYear: {
    root: {
      height: "64px"
    }
  },
  MuiPickersCalendar: {
    transitionContainer: {
      marginTop: "6px"
    }
  },
  MuiPickersCalendarHeader: {
    iconButton: {
      backgroundColor: "transparent",
      "& > *": {
        backgroundColor: "transparent"
      }
    },
    switchHeader: {
      marginTop: "2px",
      marginBottom: "4px"
    }
  },
  MuiPickersClock: {
    container: {
      margin: `32px 0 4px`
    }
  },
  MuiPickersClockNumber: {
    clockNumber: {
      left: `calc(50% - 16px)`,
      width: "32px",
      height: "32px"
    }
  },
  MuiPickerDTHeader: {
    dateHeader: {
      "& h4": {
        fontSize: "2.125rem",
        fontWeight: 400
      }
    },
    timeHeader: {
      "& h3": {
        fontSize: "3rem",
        fontWeight: 400
      }
    }
  },
  MuiPickersTimePicker: {
    hourMinuteLabel: {
      "& h2": {
        fontSize: "3.75rem",
        fontWeight: 300
      }
    }
  },
  MuiPickersToolbar: {
    toolbar: {
      "& h4": {
        fontSize: "2.125rem",
        fontWeight: 400
      }
    }
  },
  MuiLink: {
    underlineHover: {
      cursor: 'pointer'
    }
  },

  // MuiButton: {
  //   root: {
  //     "& span": {
  //       fontSize: "18px",
  //     }
  //   }
  // },
  // MuiInputLabel: {
  //   root: {
  //     color: "#e57373 !important",
  //     marginLeft: "15px"
  //   }
  // },
  //-------------------------------------------------------------------------
  //フォントサイズ
  MuiTypography: {
    body1: {
      fontSize: "13px",
    },
    "h3": {
      fontSize: "13px",
      lineHeight: "24px",
      fontWeight: 600,

      "&.reportTitle": {
        fontSize: "18px",
        paddingBottom: "12px",
      }
    },
    "h6": {
      fontSize: "13px",
      fontWeight: 600,
    },
    gutterBottom: {
      marginBottom: "8px",
    },
  },

  //ヘッダー
  MuiToolbar: {
    regular: {
      minHeight: "40px !important",
    }
  },
  MuiIconButton: {
    root: {
      padding: "8px",
    }
  },

  //サイドメニュー
  MuiListItem: {
    root:{
      "&.sidebarBrand span": {
        marginLeft: "4px",
      },
      "&.sidebarItem svg": {
        fontSize: "16px",
        width: "16px",
        height: "16px",
      },
      "&.sidebarChildrenItem span": {
        fontSize: "13px",
      }
    }
  },

  //ボタン
  MuiButton: {
    root:{
      padding: "7px 12px 6px",
      fontSize: "13px !important",
      fontWeight: "400",
      minWidth: "24px",
      borderRadius: "2px",
      lineHeight: "1",

      "& svg":{
        width: "17px",
        height: "17px",
      },

      //Helptooltip
      "&.helpTooltip svg, &.infoTooltip svg":{
        width: "22.68px",
        height: "22.68px",
      },

      //戻るボタン
      "&.buttonReturn": {
        padding: "7px 12px 6px",
      },

      //検索ボタン
      "&.buttonSearch": {
        padding: "9px 12px 8px 24px",

        "& svg": {
          position: "absolute",
          left: "8px",
          top: "7px",
        },
      },
      //検索ボタン(小)
      "&.smallButtonSearch": {
        padding: "7px 12px 6px 24px",

        "& svg": {
          position: "absolute",
          left: "8px",
          top: "5px",
        },
      },
      //検索条件クリアボタン
      "&.buttonSearchClear": {
        padding: "9px 12px 8px 32px",

        "& svg": {
          position: "absolute",
          left: "12px",
          top: "6px",
        },
      },
      "&.wfButton.narrow": {
        padding: "5px 12px 4px",
      },

      "&.btnMargin": {
        margin: "4px 4px 4px 0px",
      },
      "&.secondaryBtnMargin": {
        margin: "0px 4px 4px 0px",
      },
      "&.btnMarginLeft": {
        margin: "0px 0px 0px 4px",
      },
      "&.btnMarginRight": {
        margin: "0px 4px 0px 0px",
      },
      "&.addIconButton": {
        padding: "5px 8px 4px",
      },
    },
    containedSizeSmall: {
      padding: "7px 8px 6px",
    },
    outlined: {
      padding: "7px 12px 6px",
    },
    outlinedSizeSmall: {
      padding: "7px 8px 6px",
    },
    containedSizeLarge: {
      padding: "7px 12px 6px",
    }
  },

  //入力フォーム
  MuiFormControl: {
    root:{
      "& label + .MuiInput-formControl":{
        marginTop: "13px",
      },
      "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
        padding: "8px 6px 0",
      },
      "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] .MuiAutocomplete-input:first-child": {
        padding: "2px 0 1px",
      },
      "&.selectField .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
        padding: "4px",
      },
      "&.selectField .MuiOutlinedInput-inputMarginDense": {
        paddingBottom: "3px",
      },

      //ピッカーのoutline
      "&.styledPicker": {
        backgroundColor: "#FFF",
      },
      "&.styledPicker label + .MuiInput-formControl": {
        marginTop: "2px",
      },
      "&.styledPicker .MuiInputBase-input": {
        padding: "8px 0 1px 6px",
      },
      "&.styledPicker .MuiInput-underline:hover:not(.Mui-disabled):before": {
        border: "1px solid rgba(0, 0, 0, 0.87)",
      },
      "&.styledPicker .MuiInput-underline:before": {
        border: "1px solid rgba(0, 0, 0, 0.23)",
        height: "26.44px",
        transition: "none",
      },
      "&.styledPicker .MuiInput-underline:after": {
        border: "2px solid #1976d2",
        height: "26.44px",
        transition: "none",
      },

      //表示欄のデザイン
      "&.displayField": {
        backgroundColor: "#F6F6F6",
        padding: "8px 6px 0",
        minHeight: "26.44px",
      },
      "&.displayField label": {
        backgroundColor: "transparent",
      },

      "&.displayField .MuiInput-underline:before": {
        border: "0",
        transition: "none",
      },
      "&.displayField .MuiInput-underline:after": {
        border: "0",
        transition: "none",
      },

      //underlineが出てしまうAutocompleteの対応
      "&.hiddenField .MuiInput-underline:hover:not(.Mui-disabled):before": {
        border: "0",
      },
      "&.hiddenField .MuiInput-underline:before": {
        border: "0",
        transition: "none",
      },
      "&.hiddenField .MuiInput-underline:after": {
        border: "0",
        transition: "none",
      },

      //チェックボックス、ラジオボタンのHelpTooltipのスタイル
      "& legend.MuiFormLabel-root .helpTooltip, & legend.MuiFormLabel-root .infoTooltip":{
        width: "17px",
        height: "17px",

        "& svg":{
          width: "17px",
          height: "17px",
        }
      },
    }
  },
  MuiOutlinedInput: {
    root: {
      borderRadius: "0px",

      "&.selectEmpty": {
        width: "100%",
        height: "26.44px",
        backgroundColor: "#FFF",
      },
    },
    input: {
      padding: "6px",
      fontSize: "13px",
    },
    inputMarginDense:{
      paddingTop: "8px",
      paddingBottom: "3px"
    },

    multiline: {
      "&.MuiOutlinedInput-marginDense": {
        paddingTop: "8.44px",
        paddingBottom: "2px",
      }
    },
  },

  MuiInputLabel: {
    root: {
      "&.labelWidth": {
          width: "140px",
      }
    },
    outlined: {
      pointerEvents: "auto",

      "&.MuiInputLabel-shrink": {
        transform: "translate(4px, -6px) scale(0.75)",
      }
    }
  },
  MuiFormControlLabel: {
    root: {
      paddingTop: "8px",
      marginRight: "12px",
      marginLeft: "-4px",

      "& span": {
        padding: "0 1px",
      },
      "& svg": {
        width: "17px",
        height: "17px",
        marginTop: "-1px",
      },
      "&.processRadioLabel": {
        margin: "0px",
      },
    }
  },
  MuiInputBase: {
    root: {
      fontSize: "13px",
    }
  },
  MuiSelect: {
    selectMenu: {
      fontSize: "13px",
    },
    outlined: {
      "&.MuiSelect-outlined": {
        padding: "8px 32px 0px 6px",
      }
    },
    iconOutlined: {
      top: "6px",
    }
  },

  //プルダウンメニュー
  MuiMenuItem: {
    root: {
      fontSize: "13px",
      padding: "8px",
      paddingTop: "4px",
      paddingBottom: "4px",
    }
  },
  MuiPaper: {
    root: {
      "&.paper":{
        padding: "12px",
        margin: "8px auto",
      },
      "&.paper.basicInfo":{
        padding: "18px 12px 8px",
      },
      "&.paper.searchForm":{
        padding: "18px 12px 8px",
      },
      "&.paper.workFlowArea":{
        padding: "12px 12px 2px 12px",
      },
      "&.lbcCorporateInformation": {
        "& .MuiFormLabel-root": {
          minWidth: "228px",
        },
        "& .MuiFormLabel-root + span": {
          marginLeft: "-54px",
        }
      },
      "&.sectionPaper": {
        padding: "0 12px",
        margin: "8px auto",
        "& .MuiAccordionDetails-root": {
          padding: "6px 0",
        },
      },
    },
    elevation8: {
      boxShadow: "0 0 14px 0 rgb(53 64 82 / 65%)",
    }
  },

  MuiAutocomplete:{
    inputRoot: {
      "&[class*='MuiOutlinedInput-root']":{
        padding: "6px 6px 4px",
      }
    },
    popper:{
      boxShadow: "0 0 14px 0 rgb(53 64 82 / 65%)",
      backgroundColor: "#FFF",
    },
    listbox: {
        fontSize: "13px",
        padding: "4px 0",
    },
  },

  //テーブル
  MuiTable: {
    root: {
      minWidth: "650px",

      "&.tableEnter input": {
        padding: "4px 6px 5px",
      },
      "&.tableEnter .MuiFormControl-root.styledPicker .MuiInputBase-input": {
        padding: "4px 6px 5px",
      },
      "&.tableEnter .MuiSelect-outlined.MuiSelect-outlined": {
        padding: "6px 32px 3px 6px",
      },
    },
  },

  MuiTableCell: {
    root: {
      fontSize: "13px",
      padding: "2px 4px",
      border: "1px solid rgba(224, 224, 224, 1)",

      "& .MuiFormControl-root.styledPicker .MuiInput-underline:before": {
        height: "24.44px",
      },
      "& .MuiFormControl-root.styledPicker .MuiInput-underline:after": {
        height: "24.44px",
      },
    },

    sizeSmall: {
      padding: "2px 4px",

      "&.MuiTableCell-head": {
        padding: "4px",
      },
      "&.MuiTableCell-paddingCheckbox": {
        padding: "0 4px",
        textAlign: "center",
      },
      "&:last-child": {
        paddingRight: "4px",
      }
    },
    head: {
      fontWeight: "400",
      lineHeight: "1.2",
      backgroundColor: "#bfcdd4",

      "& .MuiIconButton-sizeSmall": {
        padding: "2px 0px",
      },
      "& .MuiIconButton-label .MuiSvgIcon-root":{
        width: "14px",
        height: "14px",
        fontSize: "14px",
      },
    },
  },

  MuiTableSortLabel: {
    root: {
      textDecoration: "underline",
      textUnderlineOffset: "0.15em",
      textDecorationColor: "#666",

      "&.hideSortIcom .MuiTableSortLabel-icon":{
        display: "none",
      },
    },
    icon: {
      width: "16px",
      height: "16px",
      fontSize: "16px",
      marginLeft: "2px",
      marginRight: "0px",
    }
  },

  MuiSvgIcon: {
    root: {
      width: "18px",
      height: "18px",
    },
    fontSizeSmall: {
      fontSize: "16px",
    }
  },

  MuiTableContainer: {
    root: {
      overflowX: "auto",
      overflowY: "visible", //auto
    }
  },

  //グリッド
  MuiGrid: {
    root:{
      "&.checkbox > .MuiFormControl-root": {
        paddingLeft: "8px",
      },
      "&.checkbox legend": {
        color: "#1565C0",
        fontSize: "12px",
        fontWeight: "400",
        position: "absolute",
        top: "-5px",
        left: "5px",
      },
      "&.checkbox.notDisableColor .MuiFormControlLabel-label.Mui-disabled": {
          color: "rgba(0, 0, 0, 0.87)",
      },
      "&.displaySort": {
        fontSize: "12px",
      },
      "&.authorityBusiness": {
        "& .MuiFormLabel-root": {
          width: "150px",
        },
        "& .MuiFormControlLabel-root": {
          width: "28px",
          marginLeft: "-30px",
        },
      },
      "&.titleForm": {
        marginTop: "2px",
      },
    },

    item: {
      marginBottom: "2px",

      "&.responsiveGrid":{
        marginBottom: "0px",
      },
      "&.workFlowRoute":{
        paddingRight: "16px !important",
      },
    },
  },

  //その他
  MuiDialogContent: {
    root: {
      padding: "8px 20px",
    }
  },

  //HelpTooltipのスタイル
  MuiTooltip: {
    popper: {
      "& .MuiTooltip-tooltip":{
          maxWidth: "320px",
          backgroundColor: "#eee",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
          fontSize: "12px",
          fontWeight: "400",
          color: "rgba(0, 0, 0, 0.87)",

        "& .MuiTooltip-arrow::before":{
          backgroundColor: "#eee",
        }
      }
    }
  },

  //仕事マスタCard
  MuiCardContent: {
    root: {
      padding: "12px 8px",

      "&:last-child":{
        paddingBottom: "4px",
      },
      "&.processCardContent":{
        padding: "8px",
      },
      "&.processCardContent > label":{
        marginBottom: "4px",
      },
    },
  },

  MuiTablePagination: {
    caption: {
      fontSize: "12px",
    },
  },

  //アコーディオン
  MuiAccordion: {
    root:{
      "&.copyAccordion": {
        margin: "4px 0",
      },
      "&.copyAccordion.Mui-expanded:before": {
        opacity: 1,
      },
      "&.copyAccordion.Mui-expanded:first-child":{
        marginTop: "4px",
      },
    }
  },

  MuiAccordionSummary: {
    root: {
      minHeight: "32px",
      padding: "0px",

      "&.Mui-expanded":{
        minHeight: "32px",
      },
      "&.thisDocument .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "207px",
      },
      "&.otherDocument .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "155px",
      },
      "&.excelDocument .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "83px",
      },
      "&.ocrDocument .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "80px",
      },
      "&.billingDataImport .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "90px",
      },
      "&.expandIcon2 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "23px",
      },
      "&.expandIcon4 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "50px",
      },
      "&.expandIcon6 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "75px",
      },
      "&.expandIcon7 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "87px",
      },
      "&.expandIcon8 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "100px",
      },
      "&.expandIcon10 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "128px",
        bottom: "6px",
      },
      "&.expandIcon11 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "140px",
      },
      "&.expandIcon12 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "152px",
      },
      "&.expandIcon13 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "164px",
      },
      "&.expandIcon18 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "224px",
        bottom: "6px",
      },
      "&.expandIconCustom .MuiAccordionSummary-expandIcon": {
        left: "61px",
        bottom: "6px",
        position: "absolute",
      },
      "&.expandIcon2B6 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "23px",
        "margin-top": "-10px",
      },
      "&.expandIcon22 .MuiAccordionSummary-expandIcon": {
        position: "absolute",
        left: "282px",
        bottom: "6px",
      },
    },
    content: {
      margin: "4px 0 0",

      "&.Mui-expanded": {
        margin: "4px 0 0",
      }
    }
  },

  MuiAccordionDetails: {
    root: {
      "& .MuiPaper-root.paper": {
        margin: "0px auto 8px",
        padding: "2px",
      },
      "& .titleForm": {
        marginLeft: "4px",
      }
    }
  },

  MuiTextField: {
    root: {
      "&.ocrTextarea": {
        height: "445px",
      },
      "&.ocrTextarea textarea": {
        height: "434px",
      }
    }
  },

};

export default overrides;
