unit un_conscond;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, sButton, Vcl.Grids,
  Vcl.DBGrids, Vcl.ExtCtrls, Vcl.Buttons, Data.DB;

type
  Tfrm_conscond = class(TForm)
    Radio: TRadioGroup;
    Edit1: TEdit;
    DBGrid1: TDBGrid;
    sButton1: TSpeedButton;
    Panel1: TPanel;
    procedure RadioClick(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure Edit1Change(Sender: TObject);
    procedure DBGrid1CellClick(Column: TColumn);
    procedure sButton1Click(Sender: TObject);
  private
    { Private declarations }
  public
     cod : integer;
    { Public declarations }
  end;

var
  frm_conscond: Tfrm_conscond;

implementation

{$R *.dfm}

uses un_entrega, un_cadmov;

procedure Tfrm_conscond.DBGrid1CellClick(Column: TColumn);
begin
  Case cod Of
     1:Begin
         Dtm_Entrega.qry_moventregaID_CONDUTOR.asstring := Dtm_Entrega.qry_cadcondutorID_CONDUTOR.asstring;
         Dtm_Entrega.qry_moventregaCONDUTOR.asstring := Dtm_Entrega.qry_cadcondutorCONDUTOR.asstring;
         Dtm_Entrega.qry_moventregaVEICULO.asstring := Dtm_Entrega.qry_cadcondutorVEICULO.asstring;
         Dtm_Entrega.qry_moventregaPLACA.asstring := Dtm_Entrega.qry_cadcondutorPLACA.asstring;
         frm_cadmov.tipo.setfocus;
       end;
  end;
  frm_conscond.Close;
end;

procedure Tfrm_conscond.Edit1Change(Sender: TObject);
var
  Sql: string; // Pesquisando registros na tabela
begin
  Dtm_Entrega.qry_cadcondutor.close;
  Dtm_Entrega.qry_cadcondutor.Sql.Clear;
  Dtm_Entrega.qry_cadcondutor.Sql.Add('select * from CAD_CONDUTOR');

  if (radio.ItemIndex = 0) then
    Sql := 'where ID_CONDUTOR like ' + QuotedStr('%' + Edit1.Text + '%')
  else if (radio.ItemIndex = 1) then
    Sql := 'where CONDUTOR like ' + QuotedStr('%' + Edit1.Text + '%');

  Dtm_Entrega.qry_cadcondutor.Sql.Add(Sql);
  Dtm_Entrega.qry_cadcondutor.Sql.Add('order by CONDUTOR');
  Dtm_Entrega.qry_cadcondutor.open;
end;

procedure Tfrm_conscond.FormShow(Sender: TObject);
begin
   Dtm_Entrega.qry_cadcondutor.Open;
   dbgrid1.SetFocus;
end;

procedure Tfrm_conscond.RadioClick(Sender: TObject);
begin
   Edit1.SetFocus;
end;

procedure Tfrm_conscond.sButton1Click(Sender: TObject);
begin
   Dtm_Entrega.qry_cadcondutor.Close;
   Close;
end;

end.
