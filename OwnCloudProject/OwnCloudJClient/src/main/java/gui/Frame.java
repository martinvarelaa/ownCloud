package gui;

import javax.swing.*;
import javax.swing.border.Border;
import javax.swing.border.EmptyBorder;
import javax.swing.border.LineBorder;
import java.awt.*;
import java.util.concurrent.Flow;


public class Frame extends JFrame {

    private JMenuBar menuBar;
    private JPanel panel1, panel2;
    private JMenu menu1, menu2;
    private JTextArea directoryList;
    private JButton upload_btn, refresh_DirList_btn, exit_btn;

    public Frame() {

        this.setFrameProperties();
        this.setMenus();
        this.setPanel();
        this.setPanelItems(panel1, panel2);

    }


    private void setFrameProperties() {

        this.setVisible(true);
        this.setResizable(true);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setTitle("Sube archivos a la nube - Martinvarelaa");
        this.setLocationRelativeTo(null);
        this.setLayout(new GridLayout(2,0));
        this.setSize(1270, 720);
    }

    private void setMenus() {

        this.menuBar = new JMenuBar();
        this.menu1   = new JMenu(" Opcion 1 ");
        this.menu2   = new JMenu(" Opcion 2 ");


        this.menuBar.add(menu1);
        this.menuBar.add(menu2);
        this.setJMenuBar(menuBar);

    }

    private void setPanel() {
        this.panel1 = new JPanel();
        this.panel1.setBackground(Color.green);
        this.panel1.setLayout(new FlowLayout());
        this.panel2 = new JPanel();
        this.panel2.setBackground(Color.BLACK);
        this.panel2.setLayout(new BorderLayout());

        this.add(panel2);
        this.add(panel1);

    }

    private void setPanelItems(JPanel panel1, JPanel panel2){

        this.upload_btn = new JButton("Upload...");
        this.refresh_DirList_btn = new JButton("Refresh");
        this.exit_btn = new JButton("Exit");

        this.upload_btn.setBounds(new Rectangle(200,180));
        this.refresh_DirList_btn.setBounds(new Rectangle(200,180));
        this.exit_btn.setBounds(new Rectangle(200,180));


        panel1.add(upload_btn);
        panel1.add(refresh_DirList_btn);
        panel1.add(exit_btn);



        this.directoryList = new JTextArea();
        this.directoryList.setSize(600,700);
        this.directoryList.setMargin(new Insets(10,10,10,10));
        this.directoryList.setEnabled(false);



        panel2.add(directoryList);
        panel2.setBorder(BorderFactory.createMatteBorder(30,15,30,15,Color.GRAY));



    }



}
