unit un_consusu;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Grids, Vcl.DBGrids, Vcl.ExtCtrls,
  Vcl.Buttons, Data.DB;

type
  Tfrm_consusu = class(TForm)
    SpeedButton1: TSpeedButton;
    DBGrid1: TDBGrid;
    Panel1: TPanel;
    procedure FormShow(Sender: TObject);
    procedure SpeedButton1Click(Sender: TObject);
    procedure DBGrid1CellClick(Column: TColumn);
  private
    { Private declarations }
  public
     cod : integer;
    { Public declarations }
  end;

var
  frm_consusu: Tfrm_consusu;

implementation

{$R *.dfm}

uses U_Senha, un_entrega;

procedure Tfrm_consusu.DBGrid1CellClick(Column: TColumn);
begin
  Case cod Of
    1:Begin
        fm_senha.codigo.text := Dtm_Entrega.qry_cadusuCOD_USU.asstring;
        fm_senha.nome.text := Dtm_Entrega.qry_cadusuUSUARIO.asstring;
        fm_senha.editsenha.setfocus;
      end;
  end;
  frm_consusu.Close;
end;

procedure Tfrm_consusu.FormShow(Sender: TObject);
begin
   Dtm_Entrega.qry_cadusu.Open;
end;

procedure Tfrm_consusu.SpeedButton1Click(Sender: TObject);
begin
   Dtm_Entrega.qry_cadusu.Close;
   Close;
end;

end.
