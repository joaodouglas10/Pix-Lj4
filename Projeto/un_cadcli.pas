unit un_cadcli;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.Mask, Vcl.DBCtrls,
  Vcl.Grids, Vcl.DBGrids, Vcl.Buttons, Vcl.ExtCtrls;

type
  Tfrm_clientes = class(TForm)
    Label1: TLabel;
    codigo: TDBEdit;
    Label2: TLabel;
    nome: TDBEdit;
    Panel1: TPanel;
    novo: TSpeedButton;
    editar: TSpeedButton;
    excluir: TSpeedButton;
    gravar: TSpeedButton;
    cancelar: TSpeedButton;
    sair: TSpeedButton;
    Label3: TLabel;
    endereco: TDBEdit;
    Label4: TLabel;
    numero: TDBEdit;
    Label5: TLabel;
    bairro: TDBEdit;
    Label6: TLabel;
    cidade: TDBEdit;
    DBGrid1: TDBGrid;
    DBNavigator1: TDBNavigator;
    Edit1: TEdit;
    Label7: TLabel;
    procedure novoClick(Sender: TObject);
    procedure editarClick(Sender: TObject);
    procedure excluirClick(Sender: TObject);
    procedure gravarClick(Sender: TObject);
    procedure cancelarClick(Sender: TObject);
    procedure sairClick(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure FormKeyPress(Sender: TObject; var Key: Char);
    procedure Edit1Change(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  frm_clientes: Tfrm_clientes;

implementation

{$R *.dfm}

uses un_entrega;

procedure Tfrm_clientes.cancelarClick(Sender: TObject);
begin
    If Application.Messagebox('Confirma Cancelamento de Clientes? ', 'Confirmação',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    codigo.ReadOnly := true;
    nome.ReadOnly := true;
    endereco.ReadOnly := true;
    numero.ReadOnly := true;
    bairro.ReadOnly := true;
    cidade.ReadOnly := true;
    novo.Enabled := true;
    editar.Enabled := true;
    excluir.Enabled := true;
    cancelar.Enabled := false;
    gravar.Enabled := false;
    sair.Enabled := true;
    Dtm_Entrega.query_cli.Cancel;
    codigo.setfocus;
end;

procedure Tfrm_clientes.Edit1Change(Sender: TObject);
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

procedure Tfrm_clientes.editarClick(Sender: TObject);
begin
    If Application.Messagebox('Confirma Alteração de Clientes? ', 'Confirmação',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    codigo.ReadOnly := false;
    nome.ReadOnly := false;
    endereco.ReadOnly := false;
    numero.ReadOnly := false;
    bairro.ReadOnly := false;
    cidade.ReadOnly := false;
    novo.Enabled := false;
    editar.Enabled := false;
    excluir.Enabled := false;
    cancelar.Enabled := true;
    gravar.Enabled := true;
    sair.Enabled := false;
    Dtm_Entrega.query_cli.Edit;
    codigo.setfocus;
end;

procedure Tfrm_clientes.excluirClick(Sender: TObject);
begin
   If Dtm_Entrega.query_cli.RecordCount <> 0 then
   If Application.Messagebox('Confirma Exclusão?', 'Confirmar',
      mb_Iconquestion + MB_YesNo + Mb_DefButton1) = IdYes Then
      begin
         Dtm_Entrega.query_cli.Delete;
         codigo.setfocus;
      end;
      If Dtm_Entrega.query_cli.RecordCount = 0 then
         showmessage('Nao Existe Registro para Excluir');
end;

procedure Tfrm_clientes.FormKeyPress(Sender: TObject; var Key: Char);
begin
   If Key=#13 Then
      Selectnext(ActiveControl,True,True);
end;

procedure Tfrm_clientes.FormShow(Sender: TObject);
begin
   Dtm_Entrega.query_cli.Open;
end;

procedure Tfrm_clientes.gravarClick(Sender: TObject);
begin
    If Application.Messagebox('Confirma Gravação de Clientes? ', 'Confirmação',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    codigo.ReadOnly := true;
    nome.ReadOnly := true;
    endereco.ReadOnly := true;
    numero.ReadOnly := true;
    bairro.ReadOnly := true;
    cidade.ReadOnly := true;
    novo.Enabled := true;
    editar.Enabled := true;
    excluir.Enabled := true;
    cancelar.Enabled := false;
    gravar.Enabled := false;
    sair.Enabled := true;
    Dtm_Entrega.query_cli.Post;
    codigo.setfocus;
end;

procedure Tfrm_clientes.novoClick(Sender: TObject);
begin
    If Application.Messagebox('Confirma Inclusão de Clientes? ', 'Confirmação',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    codigo.ReadOnly := false;
    nome.ReadOnly := false;
    endereco.ReadOnly := false;
    numero.ReadOnly := false;
    bairro.ReadOnly := false;
    cidade.ReadOnly := false;
    novo.Enabled := false;
    editar.Enabled := false;
    excluir.Enabled := false;
    cancelar.Enabled := true;
    gravar.Enabled := true;
    sair.Enabled := false;
    Dtm_Entrega.query_cli.Append;
    codigo.setfocus;
end;

procedure Tfrm_clientes.sairClick(Sender: TObject);
begin
   Dtm_Entrega.query_cli.Close;
   Close;
end;

end.
