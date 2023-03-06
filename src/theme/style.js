import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => {
  let stylebase = theme.stylebase;
  return createStyles({
      heading: {
        // 文字色変更サンプルのためコメントアウト
        //color: stylebase.color.red.light,
        fontSize: stylebase.fontSize.large,
        // marginBottom: '20px',
      },
      formArea: {
        marginTop: '20px',
        "& label": {
          // 文字色変更サンプルのためコメントアウト
          //color: getStyles(stylebase.color.red.light, true),
          fontSize: getStyles(stylebase.fontSize.medium, true),
        }
      },
      buttonRegister: {
        // 背景色変更サンプルのためコメントアウト、CSSのスタイルを直接記載
        // backgroundColor: getStyles(common.color.red.light, true),
        // "&:hover": {
        //   opacity: '0.8'
        // }
        backgroundColor: '#4caf50',
        "&:hover": {
          backgroundColor: '#357a38'
        }
      },
      radioButtonHighLight: {
        backgroundColor: '#E5CD52',
      },
      smallHelpBtn: {
        "&.helpTooltip": {
          backgroundColor: "inherit",
          marginTop: "-3px",
          width: "17px",
          height: "17px",
        },
        "&.infoTooltip": {
          backgroundColor: "inherit",
          marginTop: "-3px",
          width: "17px",
          height: "17px",
        },
        "& svg.MuiSvgIcon-root": {
          width: "17px",
          height: "17px",
        },
      },
      workMasterHighlight: {
        backgroundColor: '#F6F6F6 !important',
        backgroundClip: 'content-box',
      },
      buttonsLine: {
        alignItems: "center",
        justify: "center",
      },
      bulkAlertSuccess: {
        color: '#fff',
        fontWeight: 600,
        backgroundColor: '#4caf50',
        padding: '6px 16px',
        borderRadius: '4px',
        alignItems: 'center',
        display: 'flex',
      },
      bulkAlertError: {
        color: '#fff',
        fontWeight: 600,
        backgroundColor: '#f44336',
        padding: '6px 16px',
        borderRadius: '4px',
        alignItems: 'center',
        display: 'flex',
      },
      bulkAlertIcon: {
        opactiy: '0.9',
        fontSize: '22px',
        display: 'flex',
        padding: '7px 0',
        marginRight: '12px',
      },
      bulkAlertClose: {
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: '-8px',
        paddingLeft: '16px',
        "& button": {
          padding: "3px"
        },
      }
    })
  }
);

function getStyles(style, isImportant = false){
  if(isImportant){
    style += " !important";
  }
  return style;
}

export default useStyles;