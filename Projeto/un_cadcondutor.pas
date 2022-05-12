unit un_cadcondutor;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Buttons, Vcl.ExtCtrls, Vcl.DBCtrls,
  Vcl.Grids, Vcl.DBGrids, Vcl.StdCtrls, Vcl.Mask;

type
  Tfrm_cadcondutor = class(TForm)
    Panel1: TPanel;
    novo: TSpeedButton;
    editar: TSpeedButton;
    excluir: TSpeedButton;
    gravar: TSpeedButton;
    cancelar: TSpeedButton;
    sair: TSpeedButton;
    Label1: TLabel;
    Label2: TLabel;
    nome: TDBEdit;
    Label3: TLabel;
    veiculo: TDBEdit;
    Label4: TLabel;
    placa: TDBEdit;
    DBGrid1: TDBGrid;
    DBNavigator1: TDBNavigator;
    reg: TDBEdit;
    Label7: TLabel;
    Edit1: TEdit;
    procedure novoClick(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure sairClick(Sender: TObject);
    procedure editarClick(Sender: TObject);
    procedure excluirClick(Sender: TObject);
    procedure gravarClick(Sender: TObject);
    procedure cancelarClick(Sender: TObject);
    procedure FormKeyPress(Sender: TObject; var Key: Char);
    procedure Edit1Change(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  frm_cadcondutor: Tfrm_cadcondutor;

implementation

{$R *.dfm}

uses un_entrega;

procedure Tfrm_cadcondutor.cancelarClick(Sender: TObject);
begin
    If Application.Messagebox('Confirma Cancelar de Condutor? ', 'Confirmação',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    reg.ReadOnly := true;
    nome.ReadOnly := true;
    veiculo.ReadOnly := true;
    placa.ReadOnly := true;
    novo.Enabled := true;
    editar.Enabled := true;
    excluir.Enabled := true;
    cancelar.Enabled := false;
    gravar.Enabled := false;
    sair.Enabled := true;
    Dtm_Entrega.qry_cadcondutor.Cancel;
    nome.setfocus;
end;

procedure Tfrm_cadcondutor.Edit1Change(Sender: TObject);
var
  Sql: string; // Pesquisando registros na tabela
begin
   Dtm_Entrega.qry_cadcondutor.close;
   Dtm_Entrega.qry_cadcondutor.Sql.Clear;
   Dtm_Entrega.qry_cadcondutor.Sql.Add('select * from CAD_CONDUTOR');
   Sql := 'where CONDUTOR like ' + QuotedStr('%' + Edit1.Text + '%');
   Dtm_Entrega.qry_cadcondutor.Sql.Add(Sql);
   Dtm_Entrega.qry_cadcondutor.Sql.Add('order by CONDUTOR');
   Dtm_Entrega.qry_cadcondutor.open;
end;

procedure Tfrm_cadcondutor.editarClick(Sender: TObject);
begin
    If Application.Messagebox('Confirma Alteração de Condutor? ', 'Confirmação',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    reg.ReadOnly := true;
    nome.ReadOnly := false;
    veiculo.ReadOnly := false;
    placa.ReadOnly := false;
    novo.Enabled := false;
    editar.Enabled := false;
    excluir.Enabled := false;
    cancelar.Enabled := true;
    gravar.Enabled := true;
    sair.Enabled := false;
    Dtm_Entrega.qry_cadcondutor.Edit;
    nome.setfocus;
end;

procedure Tfrm_cadcondutor.excluirClick(Sender: TObject);
begin
  If Dtm_Entrega.qry_cadcondutor.RecordCount <> 0 then
  If Application.Messagebox('Confirma Exclusão?', 'Confirmar',
     mb_Iconquestion + MB_YesNo + Mb_DefButton1) = IdYes Then
     begin
        Dtm_Entrega.qry_cadcondutor.Delete;
        nome.setfocus;
     end;
     If Dtm_Entrega.qry_cadcondutor.RecordCount = 0 then
        showmessage('Nao Existe Registro para Excluir');
end;

procedure Tfrm_cadcondutor.FormKeyPress(Sender: TObject; var Key: Char);
begin
   If Key=#13 Then
      Selectnext(ActiveControl,True,True);
end;

procedure Tfrm_cadcondutor.FormShow(Sender: TObject);
begin
   Dtm_Entrega.qry_cadcondutor.Open;
end;

procedure Tfrm_cadcondutor.gravarClick(Sender: TObject);
begin
    If Application.Messagebox('Confirma Gravação de Condutor? ', 'Confirmação',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    reg.ReadOnly := true;
    nome.ReadOnly := true;
    veiculo.ReadOnly := true;
    placa.ReadOnly := true;
    novo.Enabled := true;
    editar.Enabled := true;
    excluir.Enabled := true;
    cancelar.Enabled := false;
    gravar.Enabled := false;
    sair.Enabled := true;
    Dtm_Entrega.qry_cadcondutor.Post;
    nome.setfocus;
end;

procedure Tfrm_cadcondutor.novoClick(Sender: TObject);
var
  codigo: Integer; // Variável do tipo integer
  Function StrZero(Num: Real; Tam: Integer): String;
  // Função para colocar zeros a esquerda
  var
    x, T: Integer;
    N, D: String;

  begin
    N := FloatToStr(Num);
    T := Pos('.', N);
    D := '';
    if T <> 0 then
    begin
      N := Copy(N, 1, T - 1);
      D := Copy(N, T, 3)
    end;
    for x := 1 to Tam - length(N) do
      N := '0' + N;
    result := N + D;
end;
begin
    If Application.Messagebox('Confirma Inclusão de Condutor? ', 'Confirmação',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    reg.ReadOnly := true;
    nome.ReadOnly := false;
    veiculo.ReadOnly := false;
    placa.ReadOnly := false;
    novo.Enabled := false;
    editar.Enabled := false;
    excluir.Enabled := false;
    cancelar.Enabled := true;
    gravar.Enabled := true;
    sair.Enabled := false;
    if Dtm_Entrega.qry_cadcondutor.RecordCount = 0 Then
       codigo := 1
    else
        begin
           Dtm_Entrega.qry_cadcondutor.Last;
           codigo := Dtm_Entrega.qry_cadcondutorID_CONDUTOR.Asinteger + 1;
        end;
        Dtm_Entrega.qry_cadcondutor.Append;
        Dtm_Entrega.qry_cadcondutorID_CONDUTOR.asstring := StrZero(codigo, 1);
        nome.setfocus;
end;

procedure Tfrm_cadcondutor.sairClick(Sender: TObject);
begin
   Dtm_Entrega.qry_cadcondutor.Close;
   Close;
end;

end.
