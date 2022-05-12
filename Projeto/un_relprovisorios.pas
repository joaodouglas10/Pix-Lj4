unit un_relprovisorios;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Buttons, Vcl.Grids, Vcl.DBGrids,
  Vcl.StdCtrls, Vcl.Mask, Data.DB;

type
  Tfrm_relprovisorios = class(TForm)
    DatIni: TMaskEdit;
    Label1: TLabel;
    Label2: TLabel;
    DatFim: TMaskEdit;
    Label3: TLabel;
    Edit1: TEdit;
    DBGrid1: TDBGrid;
    SpeedButton1: TSpeedButton;
    sButton1: TSpeedButton;
    procedure SpeedButton1Click(Sender: TObject);
    procedure sButton1Click(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure FormKeyPress(Sender: TObject; var Key: Char);
    procedure Edit1Change(Sender: TObject);
    procedure DBGrid1CellClick(Column: TColumn);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  frm_relprovisorios: Tfrm_relprovisorios;

implementation

{$R *.dfm}

uses un_entrega, un_provisorios, un_chama_servcli;

procedure Tfrm_relprovisorios.DBGrid1CellClick(Column: TColumn);
begin
   ShowScrollBar(DBGrid1.Handle,SB_HORZ,true);
end;

procedure Tfrm_relprovisorios.Edit1Change(Sender: TObject);
var
  Sql: string; // Pesquisando registros na tabela
begin
   Dtm_Entrega.query_cli.close;
   Dtm_Entrega.query_cli.Sql.Clear;
   Dtm_Entrega.query_cli.Sql.Add('select * from CAD_CLIENTE');
   Sql := 'where CLIENTE like ' + QuotedStr('%' + Edit1.Text + '%');
   Dtm_Entrega.query_cli.Sql.Add(Sql);
   Dtm_Entrega.query_cli.Sql.Add('order by CLIENTE');
   Dtm_Entrega.query_cli.open;
end;

procedure Tfrm_relprovisorios.FormKeyPress(Sender: TObject; var Key: Char);
begin
  If Key = #13 Then
    Selectnext(ActiveControl, true, true);
end;

procedure Tfrm_relprovisorios.FormShow(Sender: TObject);
begin
   Dtm_Entrega.query_cli.Open;
   datini.setfocus;
end;

procedure Tfrm_relprovisorios.sButton1Click(Sender: TObject);
begin
   Dtm_Entrega.query_cli.Close;
   close;
end;

procedure Tfrm_relprovisorios.SpeedButton1Click(Sender: TObject);
begin
    Try
       with Dtm_Entrega.Qry_Prov do
          begin
              SQL.Clear;
              SQL.Text:='SELECT PROVISORIO, ENTRADA, LOJA, NUMERO_NFE, GERENCIA, TIPO_DOC, VALOR, COD_CLI, NOME_CLI, PRAZO, VENCIMENTO, DATA_EXTENSO, EXTENSO FROM CAD_PROVISORIOS '+
              'WHERE ENTRADA >= :DTINI AND ENTRADA <= :DTFIM AND NOME_CLI = :CD';
              Parameters.ParamByName('dtini').Value := StrToDate(DatIni.Text);
              Parameters.ParamByName('dtfim').Value := StrToDate(DatFim.Text);
              Parameters.ParamByName('cd').Value := Dtm_Entrega.query_cli.FieldByName('CLIENTE').AsString;
              Open;
              if RecordCount > 0 Then
              begin
                 frm_cadprov.frx_Provisorios.loadfromfile('\\nfeloja5\projeto_entregas\relatorios\Rel_Provisorios.fr3');
                 frm_cadprov.frx_Provisorios.ShowReport();
              end
              else
              Showmessage('Não Existe(m) Provisórios ou Duplicatas para este Cliente !!!');
          end;
       except
           Showmessage('Existe(m) Erro(s) no Relatorio!!');
       end;
     end;
end.



