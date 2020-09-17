package gui;

import javax.swing.*;

public class Dialog extends JDialog {

    public Dialog( Frame frame )  {

        if(frame.isVisible()){
              frame.setVisible(false);
              this.setVisible(true);

        }


    }


}
