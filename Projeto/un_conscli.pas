unit un_conscli;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Grids, Vcl.DBGrids, Vcl.StdCtrls,
  sButton, Vcl.ExtCtrls, Vcl.Buttons, Data.DB;

type
  Tfrm_conscli = class(TForm)
    DBGrid1: TDBGrid;
    Edit1: TEdit;
    Radio: TRadioGroup;
    sButton1: TSpeedButton;
    Panel1: TPanel;
    procedure RadioClick(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure DBGrid1CellClick(Column: TColumn);
    procedure Edit1Change(Sender: TObject);
    procedure sButton1Click(Sender: TObject);
  private
    { Private declarations }
  public
     cod : integer;
    { Public declarations }
  end;

var
  frm_conscli: Tfrm_conscli;

implementation

{$R *.dfm}

uses un_entrega;

procedure Tfrm_conscli.DBGrid1CellClick(Column: TColumn);
begin
  Case cod Of
     1:Begin
         Dtm_Entrega.qry_ProvisoriosCOD_CLI.asstring := Dtm_Entrega.query_cliID_CLIENTE.asstring;
         Dtm_Entrega.qry_ProvisoriosNOME_CLI.asstring := Dtm_Entrega.query_cliCLIENTE.asstring;
       end;
  end;
  frm_conscli.Close;
end;

procedure Tfrm_conscli.Edit1Change(Sender: TObject);
var
  Sql: string; // Pesquisando registros na tabela
begin
  Dtm_Entrega.query_cli.close;
  Dtm_Entrega.query_cli.Sql.Clear;
  Dtm_Entrega.query_cli.Sql.Add('select * from CAD_CLIENTE');

  if (radio.ItemIndex = 0) then
    Sql := 'where ID_CLIENTE like ' + QuotedStr('%' + Edit1.Text + '%')
  else if (radio.ItemIndex = 1) then
    Sql := 'where CLIENTE like ' + QuotedStr('%' + Edit1.Text + '%');

  Dtm_Entrega.query_cli.Sql.Add(Sql);
  Dtm_Entrega.query_cli.Sql.Add('order by CLIENTE');
  Dtm_Entrega.query_cli.open;
end;

procedure Tfrm_conscli.FormShow(Sender: TObject);
begin
   Dtm_Entrega.query_cli.Open;
end;

procedure Tfrm_conscli.RadioClick(Sender: TObject);
begin
   edit1.SetFocus;
end;

procedure Tfrm_conscli.sButton1Click(Sender: TObject);
begin
   Dtm_Entrega.query_cli.Close;
   Close;
end;

end.
