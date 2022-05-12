unit un_reldiario;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Buttons, Vcl.StdCtrls, Vcl.Mask;

type
  Tfrm_reldiario = class(TForm)
    Label1: TLabel;
    DatIni: TMaskEdit;
    Label2: TLabel;
    DatFim: TMaskEdit;
    SpeedButton1: TSpeedButton;
    SpeedButton2: TSpeedButton;
    procedure SpeedButton1Click(Sender: TObject);
    procedure SpeedButton2Click(Sender: TObject);
    procedure FormKeyPress(Sender: TObject; var Key: Char);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  frm_reldiario: Tfrm_reldiario;

implementation

{$R *.dfm}

uses un_entrega, un_pagtransf;

procedure Tfrm_reldiario.FormKeyPress(Sender: TObject; var Key: Char);
begin
  If Key = #13 Then
     Selectnext(ActiveControl, true, true);
end;

procedure Tfrm_reldiario.SpeedButton1Click(Sender: TObject);
begin
    Try
       with Dtm_Entrega.qry_reldiario do
          begin
              close;
              SQL.Clear;
              SQL.Text:='SELECT CLIENTE, DATA_PAG, VALOR '+
              'FROM CAD_PAGTRANSF '+
              'WHERE DATA >= :DTINI AND DATA <= :DTFIM '+
              'ORDER BY CLIENTE';
              Parameters.ParamByName('dtini').Value := StrToDate(DatIni.Text);
              Parameters.ParamByName('dtfim').Value := StrToDate(DatFim.Text);
              open;
              if RecordCount > 0 Then
              begin
                  frm_pagTransf.Rel_diario.loadfromfile('\\Douglas\Projeto_Pag Lj4\Relatorios\rel_diario.fr3');
                  with frm_pagTransf.Rel_diario.Variables do
                     begin
                        Variables['periodo'] := QuotedStr(Datini.Text + ' at� ' + DatFim.Text);
                        frm_pagTransf.Rel_Diario.PrepareReport;
                        frm_pagTransf.Rel_Diario.Print;
                        frm_reldiario.Close;
                     end;
              end
              else
              Showmessage('N�o existe movimento para este PER�ODO!!!');
              frm_reldiario.close;
          end;
       Finally
    end;
end;

procedure Tfrm_reldiario.SpeedButton2Click(Sender: TObject);
begin
   Close;
end;

end.
