unit un_principal;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Imaging.jpeg, Vcl.ExtCtrls,
  Vcl.Buttons, Vcl.StdCtrls, sButton, sSkinManager, Vcl.ComCtrls;

type
  Tfrm_principal = class(TForm)
    StatusBar1: TStatusBar;
    Timer1: TTimer;
    Image1: TImage;
    Panel1: TPanel;
    SpeedButton1: TSpeedButton;
    SpeedButton2: TSpeedButton;
    SpeedButton3: TSpeedButton;
    sButton5: TSpeedButton;
    Label1: TLabel;
    Label2: TLabel;
    Panel2: TPanel;
    procedure Timer1Timer(Sender: TObject);
    procedure sButton1Click(Sender: TObject);
    procedure sButton2Click(Sender: TObject);
    procedure sButton3Click(Sender: TObject);
    procedure sButton4Click(Sender: TObject);
    procedure sButton5Click(Sender: TObject);
    procedure SpeedButton1Click(Sender: TObject);
    procedure SpeedButton2Click(Sender: TObject);
    procedure SpeedButton3Click(Sender: TObject);
    procedure SpeedButton5Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  frm_principal: Tfrm_principal;

implementation

{$R *.dfm}

uses un_cadcondutor, un_cadmov, un_movrealizadas, un_cadcli, un_cadvendedor,
  un_cadusu, un_pagtransf, un_provisorios, un_trasnf;

procedure Tfrm_principal.sButton1Click(Sender: TObject);
begin
   frm_clientes.showmodal;
end;

procedure Tfrm_principal.sButton2Click(Sender: TObject);
begin
{   frm_cadcondutor.showmodal;}
end;

procedure Tfrm_principal.sButton3Click(Sender: TObject);
begin
{   frm_cadmov.showmodal;}
end;

procedure Tfrm_principal.sButton4Click(Sender: TObject);
begin
{   frm_realizadas.Showmodal;}
end;

procedure Tfrm_principal.sButton5Click(Sender: TObject);
begin
   Close;
end;

procedure Tfrm_principal.SpeedButton1Click(Sender: TObject);
begin
  frm_vendedor.Showmodal;
end;

procedure Tfrm_principal.SpeedButton2Click(Sender: TObject);
begin
   frm_cadusu.showmodal;
end;

procedure Tfrm_principal.SpeedButton3Click(Sender: TObject);
begin
   frm_pagTransf.showmodal;
end;

procedure Tfrm_principal.SpeedButton5Click(Sender: TObject);
begin
{   frm_clientes.ShowModal;}
end;

procedure Tfrm_principal.Timer1Timer(Sender: TObject);
begin
   StatusBar1.Panels[3].Text := '' + FormatDateTime('hh:nn:ss',now);
   StatusBar1.Panels[2].Text := '' + FormatDateTime ('dddd", "dd" de "mmmm" de "yyyy',now);
   Panel2.Caption := '' + FormatDateTime('hh:nn:ss',now);
end;

end.
