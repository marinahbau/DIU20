/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sesion.pkg4.java;

import java.awt.Dimension;
import java.awt.GraphicsEnvironment;
import java.awt.Point;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Marina
 */
public class MandosCoche extends javax.swing.JFrame implements Runnable {

    /**
     * Creates new form Cliente
     */
    private FilterManager gestorFiltros;
    int incrementoVelocidad;
    Boolean estado;
    Thread thr;
    
    public MandosCoche() {
        initComponents();
        gestorFiltros = new FilterManager();
        incrementoVelocidad = 0;
        estado = false;
        thr = new Thread(this);
        
        Dimension windowSize = getSize();
        GraphicsEnvironment ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
        Point centerPoint = ge.getCenterPoint();

        int dx = (centerPoint.x - windowSize.width / 2) -500;
        int dy = (centerPoint.y - windowSize.height / 2);  
        setLocation(dx, dy);
        
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        estadoCoche = new javax.swing.JToggleButton();
        jLabel1 = new javax.swing.JLabel();
        acelerar = new javax.swing.JToggleButton();
        frenar = new javax.swing.JToggleButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        estadoCoche.setText("ENCENDER");
        estadoCoche.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                estadoCocheActionPerformed(evt);
            }
        });

        jLabel1.setFont(new java.awt.Font("Porky's", 1, 36)); // NOI18N
        jLabel1.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel1.setText("APAGADO");

        acelerar.setText("ACELERAR");
        acelerar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                acelerarActionPerformed(evt);
            }
        });

        frenar.setText("FRENAR");
        frenar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                frenarActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(layout.createSequentialGroup()
                        .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 365, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(55, 55, 55)
                        .addComponent(estadoCoche)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 98, Short.MAX_VALUE)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(frenar, javax.swing.GroupLayout.PREFERRED_SIZE, 176, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(acelerar, javax.swing.GroupLayout.PREFERRED_SIZE, 176, javax.swing.GroupLayout.PREFERRED_SIZE))))
                .addGap(58, 58, 58))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap(60, Short.MAX_VALUE)
                .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(59, 59, 59)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(acelerar)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(frenar))
                    .addComponent(estadoCoche, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(53, 53, 53))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void estadoCocheActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_estadoCocheActionPerformed
        estado = estadoCoche.isSelected();
        if(estado){
            jLabel1.setText("ENCENDIDO");
            estadoCoche.setText("APAGAR");
        }
        else{
            jLabel1.setText("APAGADO");
            estadoCoche.setText("ENCENDER");
            frenar.setSelected(false);
            frenar.setText("FRENAR");
            acelerar.setSelected(false);
            acelerar.setText("ACELERAR");
            incrementoVelocidad = 0;
        }
            
            
    }//GEN-LAST:event_estadoCocheActionPerformed

    private void acelerarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_acelerarActionPerformed
        if(!estado){
            acelerar.setSelected(false);
        }
        if(frenar.isSelected()){
            frenar.setSelected(false);
            frenar.setText("FRENAR");
        }
            
        
        if (acelerar.isSelected()){
            acelerar.setText("SOLTAR ACELERADOR");
            incrementoVelocidad = 100;
        }
        else{
            acelerar.setText("ACELERAR");
            incrementoVelocidad = 0;
        }
            
    }//GEN-LAST:event_acelerarActionPerformed

    private void frenarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_frenarActionPerformed
        // TODO add your handling code here:
        if(!estado){
            frenar.setSelected(false);
        }
        if(acelerar.isSelected()){
            acelerar.setSelected(false);
            acelerar.setText("ACELERAR");
        }
 
        if(frenar.isSelected()){
            frenar.setText("SOLTAR FRENO");
            incrementoVelocidad = -100;
        } 
        else{
             frenar.setText("FRENAR");
             incrementoVelocidad = 0;
        }
    }//GEN-LAST:event_frenarActionPerformed

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JToggleButton acelerar;
    private javax.swing.JToggleButton estadoCoche;
    private javax.swing.JToggleButton frenar;
    private javax.swing.JLabel jLabel1;
    // End of variables declaration//GEN-END:variables

    @Override
    public void run() {
        while(true){
            gestorFiltros.peticionFiltros(incrementoVelocidad, estado);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
                Logger.getLogger(MandosCoche.class.getName()).log(Level.SEVERE, null, ex);
            }
        }  
    }
}
