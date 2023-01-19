export const ColoredMessage = ({color, message}) => {

    const contentStyle = {
        color,
        fontSize : "20px"
      }

      return(
        <p style={contentStyle}>{message}</p>

      );
  }