unit un_relcomp;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Buttons, Vcl.Grids, Vcl.DBGrids,
  Vcl.StdCtrls, Vcl.Mask;

type
  Tfrm_comp = class(TForm)
    DatIni: TMaskEdit;
    Label1: TLabel;
    Label2: TLabel;
    DatFim: TMaskEdit;
    Label3: TLabel;
    Edit1: TEdit;
    DBGrid1: TDBGrid;
    SpeedButton1: TSpeedButton;
    sButton1: TSpeedButton;
    procedure sButton1Click(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure FormKeyPress(Sender: TObject; var Key: Char);
    procedure Edit1Change(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  frm_comp: Tfrm_comp;

implementation

{$R *.dfm}

uses un_entrega, un_pagtransf;

procedure Tfrm_comp.Edit1Change(Sender: TObject);
begin
    Dtm_Entrega.qry_pagtransf.close;
    Dtm_Entrega.qry_pagtransf.Sql.Clear;
    Dtm_Entrega.qry_pagtransf.Sql.Add('select * from CAD_PAGTRANSF');
    Dtm_Entrega.qry_pagtransf.Sql.Add('where VENDEDOR like ' + QuotedStr('%' + Edit1.Text + '%'));
    Dtm_Entrega.qry_pagtransf.Sql.Add('order by VENDEDOR');
    Dtm_Entrega.qry_pagtransf.open;
end;

procedure Tfrm_comp.FormKeyPress(Sender: TObject; var Key: Char);
begin
  If Key = #13 Then
    Selectnext(ActiveControl, true, true);
end;

procedure Tfrm_comp.FormShow(Sender: TObject);
begin
   Dtm_Entrega.query_comp.Open;
   datini.setfocus;
end;

procedure Tfrm_comp.sButton1Click(Sender: TObject);
begin
   Dtm_Entrega.query_comp.Close;
   close;
end;

end.
