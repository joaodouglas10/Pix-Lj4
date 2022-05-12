
//////////////////////////////////////////////////////////////////////
/**
 *	@file	ENSF.h
 *	@brief	ENSFライブラリヘッダファイル
 *	@par	Copyright:<BR>
 *			(C)2010,EPSON SOFTWARE DEVELOPMENT LABORATORY, INC.
 *
 *	@par	更新履歴
 *	@li		2010.07.01	Y.Matsuda
 *	<UL>
 *		<LI>新規作成</LI>
 *	</UL>
 */
//////////////////////////////////////////////////////////////////////

#ifndef __ENSF_H
#define __ENSF_H

//////////////////////////////////////////////////////////////////////
// インクルード
//////////////////////////////////////////////////////////////////////
#include <windows.h>

//////////////////////////////////////////////////////////////////////
// 定数定義
//////////////////////////////////////////////////////////////////////
//エラーコード
#define ENSF_STATUS_SUCCESS				0	//処理成功
#define ENSF_STATUS_ERROR				-1	//処理失敗
#define ENSF_STATUS_NOT_SUPPORTED		-2	//未サポートAPI
#define ENSF_STATUS_PARAMETER_INVALID	-3	//パラメータ不正
#define ENSF_STATUS_BUFFER_MOREREQUIRED	-4	//バッファ不足


//////////////////////////////////////////////////////////////////////
// 構造体定義
//////////////////////////////////////////////////////////////////////
//ケーブルレス設定可能判定用構造体
typedef struct _ENSF_CAPABILITYINFO 
{
	char*		szSSID;					//接続済みのSSID（自動設定対象のSSID）
	WCHAR*		pwcProfileName;			//接続済みのプロファイル名（自動設定対象のプロファイル）
	bool		bSSIDAlreadyExists;		///< ケーブルレス設定用のSSIDが既に存在するか？(true:する, false:しない).
}SENSF_CAPABILITYINFO,*PSENSF_CAPABILITYINFO;


//////////////////////////////////////////////////////////////////////
// Windows2000以降サポートAPI
//////////////////////////////////////////////////////////////////////

/**
 *	ライブラリのバージョンを取得
 *
 *	ENSFライブラリのバージョンを取得する
 *
 *	@param	punVersion		バージョン番号（OUT）
 *	@return	処理結果を返す。
 *			@li	@c	ENSF_STATUS_SUCCESS				= 処理成功
 *			@li	@c	ENSF_STATUS_ERROR				= 処理失敗
 *			@li	@c	ENSF_STATUS_NOT_SUPPORTED		= 未サポートAPI
 *			@li	@c	ENSF_STATUS_PARAMETER_INVALID	= パラメータ不正
 *
 */
int WINAPI GetENSFVersion(unsigned int* punVersion);

/**
 *	ネットワークI/Fが使用できるかを判定
 *
 *	現在のネットワーク環境においてネットワークI/Fが使用できるかを判定する
 *
 *	@param	pbEnabled		有効=true 無効=false（OUT）
 *	@return	処理結果を返す。
 *			@li	@c	ENSF_STATUS_SUCCESS				= 処理成功
 *			@li	@c	ENSF_STATUS_ERROR				= 処理失敗
 *			@li	@c	ENSF_STATUS_NOT_SUPPORTED		= 未サポートAPI
 *			@li	@c	ENSF_STATUS_PARAMETER_INVALID	= パラメータ不正
 *
 */
int WINAPI GetNICAvailability(bool* pbEnabled);

//////////////////////////////////////////////////////////////////////
// WindowsVista以降サポートAPI
//////////////////////////////////////////////////////////////////////

/**
 *	無線LANの有効/無効状態を取得
 *
 *	無線LANのNICが複数あった際は、1つでも有効なものがあった場合はTrueとする
 *
 *	@param	pbWirelessOn		無線有効=true 無効=false（OUT）
 *	@return	処理結果を返す。
 *			@li	@c	ENSF_STATUS_SUCCESS				= 処理成功
 *			@li	@c	ENSF_STATUS_ERROR				= 処理失敗
 *			@li	@c	ENSF_STATUS_NOT_SUPPORTED		= 未サポートAPI
 *			@li	@c	ENSF_STATUS_PARAMETER_INVALID	= パラメータ不正
 *
 */
int WINAPI GetWirelessLANStatus(bool* pbWirelessOn);

/**
 *	ケーブルレス設定が可能かどうかを判定
 *
 *	現在のネットワーク環境においてケーブルレス設定が可能かどうかを判定する
 *
 *	@param	pszHwType		ハードウェアタイプ（IN）
*	@param	pbCablelessSetupEnable		WAC可能=True WAC不可能=False（OUT）
 *	@param	pData			結果を格納する出力バッファ（OUT）
 *	@param	punDataSize		出力バッファサイズ（IN/OUT）
 *	@return	処理結果を返す。
 *			@li	@c	ENSF_STATUS_SUCCESS				= 処理成功
 *			@li	@c	ENSF_STATUS_ERROR				= 処理失敗
 *			@li	@c	ENSF_STATUS_NOT_SUPPORTED		= 未サポートAPI
 *			@li	@c	ENSF_STATUS_PARAMETER_INVALID	= パラメータ不正
  *			@li	@c	ENSF_STATUS_BUFFER_MOREREQUIRED	=　バッファ不足
 *
 */
int WINAPI GetCablelessSetupCapability(const char* pszHwType,bool* pbCablelessSetupEnable,void* pData,unsigned int* punDataSize);


#endif // __ENSF_H