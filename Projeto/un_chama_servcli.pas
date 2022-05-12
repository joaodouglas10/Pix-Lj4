unit un_chama_servcli;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, sButton, Vcl.Buttons,
  sBitBtn, Vcl.DBCtrls, Vcl.Mask, Vcl.Grids, Vcl.DBGrids, RpCon, RpConDS,
  RpDefine, RpRave, Data.DB, Data.Win.ADODB, Vcl.ExtCtrls;

type
  Tfrm_rel_servcli = class(TForm)
    DatIni: TMaskEdit;
    DatFim: TMaskEdit;
    Label1: TLabel;
    Label2: TLabel;
    Edit1: TEdit;
    DBGrid1: TDBGrid;
    Label3: TLabel;
    SpeedButton1: TSpeedButton;
    frm_chama_relcli: TSpeedButton;
    sButton1: TSpeedButton;
    procedure FormShow(Sender: TObject);
    procedure FormKeyPress(Sender: TObject; var Key: Char);
    procedure SpeedButton1Click(Sender: TObject);
    procedure frm_chama_relcliClick(Sender: TObject);
    procedure sButton1Click(Sender: TObject);
  private
    { Private declarations }
  public
     { Public declarations }
  end;

var
  frm_rel_servcli: Tfrm_rel_servcli;

implementation

{$R *.dfm}

uses un_entrega, un_cadmov;

procedure Tfrm_rel_servcli.FormKeyPress(Sender: TObject; var Key: Char);
begin
  If Key = #13 Then
    Selectnext(ActiveControl, true, true);
end;

procedure Tfrm_rel_servcli.FormShow(Sender: TObject);
begin
   Dtm_Entrega.qry_cadcondutor.Open;
   datini.setfocus;
end;

procedure Tfrm_rel_servcli.frm_chama_relcliClick(Sender: TObject);
begin
    Dtm_Entrega.qry_cadcondutor.close;
    Dtm_Entrega.qry_cadcondutor.Sql.Clear;
    Dtm_Entrega.qry_cadcondutor.Sql.Add('select * from CAD_CONDUTOR');
    Dtm_Entrega.qry_cadcondutor.Sql.Add('where CONDUTOR like ' + QuotedStr('%' + Edit1.Text + '%'));
    Dtm_Entrega.qry_cadcondutor.Sql.Add('order by CONDUTOR');
    Dtm_Entrega.qry_cadcondutor.open;
end;

procedure Tfrm_rel_servcli.sButton1Click(Sender: TObject);
begin
   Dtm_Entrega.qry_cadcondutor.Close;
   close;
end;

procedure Tfrm_rel_servcli.SpeedButton1Click(Sender: TObject);
begin //Gerando o relatório
    Try
       with Dtm_Entrega.query_ent do
          begin
              SQL.Clear;
              SQL.Text:='SELECT DESTINO, ENDERECO, LOJA, PAGAMENTO, NUMERO, BAIRRO, VENDEDOR, VALOR, OBSERVACOES, SITUACAO, GERENCIA FROM MOV_ENTREGAS '+
              'WHERE DATA >= :DTINI AND DATA <= :DTFIM AND ID_CONDUTOR = :CD';
              Parameters.ParamByName('dtini').Value := StrToDate(DatIni.Text);
              Parameters.ParamByName('dtfim').Value := StrToDate(DatFim.Text);
              Parameters.ParamByName('cd').Value := Dtm_Entrega.qry_cadcondutor.FieldByName('ID_CONDUTOR').AsInteger;
              Open;
              if RecordCount > 0 Then
              begin
                 frm_cadmov.rv_entregas.SetParam('periodo' , Datini.Text + ' até ' + DatFim.Text);
                 frm_cadmov.rv_entregas.SetParam('codcondutor' , Dtm_Entrega.qry_cadcondutor.FieldByName('ID_CONDUTOR').AsString+' - '+
                                                                 Dtm_Entrega.qry_cadcondutor.FieldByName('CONDUTOR').AsString);
                 frm_cadmov.rv_entregas.SetParam('placaveiculo', Dtm_Entrega.qry_cadcondutor.FieldByName('PLACA').AsString);
                 frm_cadmov.rv_entregas.SetParam('tipoveiculo' , Dtm_Entrega.qry_cadcondutor.FieldByName('VEICULO').AsString);
                 frm_cadmov.rv_entregas.ProjectFile:=('\\nfeloja5\Projeto_Entregas\Relatorios\rel_entregas.rav');
                 frm_cadmov.rv_entregas.Execute;
                 frm_rel_servcli.Close;
              end
              else
              Showmessage('Não existe Entregas para esse motorista !!!');
          end;
       except
           Showmessage('Existe(m) Erro(s) no Relatorio!!');
       end;
     end;
end.




